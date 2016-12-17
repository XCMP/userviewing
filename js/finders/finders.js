import { DEFAULTS } from '../utils/defaults'

export function getContainerId() {
  const container = $(DEFAULTS().CONTAINER_SELECTOR)[0];
  if (container) {
    return $(container).attr(DEFAULTS().CONTAINER_ATTRIBUTE);
  }
  throw new DOMException('container found');
}

export function getItemId(el) {
  if (el === undefined) throw new DOMException('item found');
  const item = $(el);
  return item.attr(DEFAULTS().ITEM_ATTRIBUTE);
}