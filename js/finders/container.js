function getContainerId() {
  const container = $('[uvc]')[0];
  if (container) return $(container).attr('uvc');
  throw DOMException('con container found');
}

export {
  getContainerId
}