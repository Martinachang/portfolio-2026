// xizhou.js — the Walk Xizhou case study (xizhou.html).
// site.js has loaded, so t(), fill() and the shared item templates exist.

const xz = content.xizhou;

function stageRow(stage) {
  return `<tr>
       <th scope="row">${t(stage.stage)}</th>
       <td>${t(stage.method)}</td>
       <td>${t(stage.purpose)}</td>
     </tr>`;
}

function quoteBlock(quote) {
  return `<blockquote class="fm-quote">
       <p>${t(quote.text)}</p>
       <cite>${t(quote.cite)}</cite>
     </blockquote>`;
}

// Every image is still a placeholder: no exports exist yet, and there are no deck slides to crop.
function photoPanel(photo) {
  return `<div class="fm-panel fm-grain">
       <div class="fm-shot-placeholder">${t(photo)}</div>
     </div>`;
}

function renderPage() {
  fill("fm-process", xz.process.steps, timelineItem);
  fill("fm-problem-points", xz.problem.items, listItem);
  fill("fm-stages", xz.research.stages, stageRow);
  fill("fm-quotes", xz.research.quotes, quoteBlock);
  fill("fm-users", xz.users.items, numberedItem);
  fill("fm-insights", xz.insights.items, numberedItem);
  fill("fm-decisions", xz.decisions.items, numberedItem);
  fill("fm-funnel", xz.features.four.funnel.steps, stepItem);
  fill("fm-business-cards", xz.business.cards, cardItem);
  fill("fm-results", xz.results.items, numberedItem);
  fill("fm-photos", xz.results.photos, photoPanel);

  document.getElementById("fm-mail-link").href = "mailto:" + content.site.email;
}
