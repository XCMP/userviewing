function getContainerId() {
  const container = $('[data-uvc]')[0];
  if (container) return $(container).attr('data-uvc');
  throw DOMException('container found');
}

export {
  getContainerId
}