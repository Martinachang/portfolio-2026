// xizhou.js — the Walk Xizhou case study (work/xizhou/index.html).
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

// result-1.jpg to result-3.jpg, in the same order as xz.results.photos below — a real photo
// carries its own alt text directly, unlike the Figma-export charts above which need a hidden
// table because their words are outlined paths, not real text.
function photoPanel(photo, i) {
  return `<div class="fm-panel fm-grain">
       <div class="fm-full-shot">
         <img src="img/result-${i + 1}.jpg" alt="${t(photo)}" loading="lazy">
       </div>
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
  fill("fm-funnel", xz.features.four.funnel.steps, stepItem); // hidden (.fm-sr): design-4.svg is the visible list
  fill("fm-business-cards", xz.business.cards, cardItem);
  fill("fm-results", xz.results.items, numberedItem);
  fill("fm-photos", xz.results.photos, photoPanel);

  document.getElementById("fm-mail-link").href = "mailto:" + content.site.email;
}
