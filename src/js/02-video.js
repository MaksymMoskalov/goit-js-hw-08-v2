import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const LAST_PLAYED = 'videoplayer-current-time';

player.on(
  'timeupdate',
  _.throttle(e => {
    localStorage.setItem(LAST_PLAYED, e.seconds);
  }, 1000)
);

player.setCurrentTime(Number(localStorage.getItem(LAST_PLAYED)));
