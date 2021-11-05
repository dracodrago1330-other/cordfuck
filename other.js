const $ = document.querySelector.bind(document),
      resizeSection = (mainHeight, headerHeight) => $("section").style.height = mainHeight - headerHeight + 'px',
      windowResize = () => resizeSection($("main").offsetHeight, $("header").offsetHeight);

window.addEventListener("resize", windowResize, true);
window.onLoad = windowResize;