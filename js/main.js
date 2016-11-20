import {getContainerId} from './finders/container';
import {send} from './sender/sender';

const containerId = getContainerId();

send(containerId);

inView.threshold(0.25);

inView('[uvi]')
    .on('enter', el => {console.log('Enter: ', $(el).attr('uvi'));})
    .on('exit',  el => {console.log('Exit : ', $(el).attr('uvi'));});