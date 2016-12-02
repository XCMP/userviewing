import * as CONSTS from '../utils/constants'

function getContainerId() {
  const container = $(CONSTS.CONTAINER_SELECTOR)[0];
  if (container) return $(container).attr(CONSTS.CONTAINER_ATTRIBUTE);
  throw new DOMException('container found');
}

function getItemId(el) {
  if (el === undefined) throw new DOMException('item found');
  const item = $(el);
  return item.attr(CONSTS.ITEM_ATTRIBUTE);
}

export {
    getContainerId,
    getItemId
}