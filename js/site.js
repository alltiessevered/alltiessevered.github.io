(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!btn || !nav) {
    return;
  }

  btn.addEventListener("click", function () {
    var open = nav.className.indexOf("is-open") !== -1;
    if (open) {
      nav.className = nav.className.replace(/\bis-open\b/g, "").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
      btn.setAttribute("aria-expanded", "false");
    } else {
      nav.className = (nav.className + " is-open").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
      btn.setAttribute("aria-expanded", "true");
    }
  });
})();
