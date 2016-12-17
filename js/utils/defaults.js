import CONSTS from '../utils/constants';

let _defaults = Object.assign({}, CONSTS());

export function setDefaults() {
  const config = document.querySelector('[data-component-id=bltg]').textContent;
  if (config) {
    const defaultsOverride = JSON.parse(config);
    _defaults.PERCENTAGE_IN_VIEW = defaultsOverride.PERCENTAGE_IN_VIEW | 25;
    _defaults.TIME_IN_VIEW = defaultsOverride.TIME_IN_VIEW || 3000;
    _defaults.WORKER_TIMER = (_defaults.TIME_IN_VIEW + 25);
    _defaults.URL_END_POINT = defaultsOverride.URL_END_POINT || 'http://localhost:8080';
  }
}

export function DEFAULTS() {
  return _defaults;
}