
document.addEventListener('DOMContentLoaded', (event) => {

  initHighlight();
  generateTargetBlank();
});

function initHighlight() {
  document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightBlock(block);
  });
}

function generateTargetBlank() {
  var links = document.links;

  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = '_blank';
    }
  }
}