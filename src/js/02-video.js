import throttle from 'lodash.throttle';

const onPlay = function (data) {
  const timeOfWatch = data.seconds;
  console.log(timeOfWatch);

  localStorage.setItem('videoplayer-current-time', timeOfWatch);
};

player.on('timeupdate', throttle(onPlay, 1000));

messageOut();

function messageOut() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
