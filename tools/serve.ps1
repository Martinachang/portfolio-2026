# A tiny static file server for checking the site locally on Windows.
#
# Why this exists: test.html has to be opened over http://, not by double-clicking it,
# because the browser blocks a file:// page from reading other files. The usual
# `python3 -m http.server` does not work on a machine without Python — on Windows,
# `python` is often a Microsoft Store stub that prints nothing and exits.
# PowerShell can serve the folder on its own, so nothing needs installing.
#
#   Run:   powershell -ExecutionPolicy Bypass -File tools/serve.ps1
#   Open:  http://127.0.0.1:8123/test.html
#   Stop:  Ctrl+C in that window
#
# It listens on 127.0.0.1 only, so nothing outside this computer can reach it.

$ErrorActionPreference = 'Stop'

# This script lives in tools/, so serve its parent: the repo root, where index.html is.
# Deriving it from the script's own location means the repo works wherever it is cloned.
if ($PSScriptRoot) { $root = Split-Path $PSScriptRoot -Parent } else { $root = (Get-Location).Path }
$prefix = 'http://127.0.0.1:8123/'

# The browser needs the right Content-Type or it will refuse to run the scripts
# and ignore the stylesheets.
$types = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.ico'  = 'image/x-icon'
  '.woff' = 'font/woff'
  '.woff2'= 'font/woff2'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
  $listener.Start()
} catch {
  Write-Host "Could not start on $prefix"
  Write-Host "Something else is probably using port 8123. To find and stop it:"
  Write-Host "  Get-CimInstance Win32_Process -Filter ""Name='powershell.exe'"" |"
  Write-Host "    Where-Object { `$_.CommandLine -like '*serve.ps1*' } |"
  Write-Host "    ForEach-Object { Stop-Process -Id `$_.ProcessId -Force }"
  exit 1
}

Write-Host "Serving $root"
Write-Host "Open http://127.0.0.1:8123/test.html   (Ctrl+C to stop)"

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()

    # "/" means index.html; %20 and friends have to be decoded back into real characters.
    $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ($rel -eq '') { $rel = 'index.html' }
    $path = Join-Path $root ($rel -replace '/', '\')
    if (Test-Path $path -PathType Container) { $path = Join-Path $path 'index.html' }

    # Refuse to serve anything outside the folder, so a URL full of ".." cannot
    # walk up into the rest of the disk.
    $full = [System.IO.Path]::GetFullPath($path)
    if (-not $full.StartsWith([System.IO.Path]::GetFullPath($root), [StringComparison]::OrdinalIgnoreCase)) {
      $ctx.Response.StatusCode = 403
      $ctx.Response.Close()
      continue
    }

    if (Test-Path $full -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $ct = $types[$ext]
      if (-not $ct) { $ct = 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $ctx.Response.ContentType = $ct
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host ("200 {0}" -f $rel)
    } else {
      $ctx.Response.StatusCode = 404
      Write-Host ("404 {0}" -f $rel)
    }

    $ctx.Response.Close()
  } catch {
    # One bad request should not take the server down.
    Write-Host ("ERR {0}" -f $_.Exception.Message)
  }
}
