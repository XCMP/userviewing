function getViewportDimensions() {

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return {
    width: w,
    height: h,
  };
}

export {
  getViewportDimensions
}
