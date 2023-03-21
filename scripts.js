window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
        document.getElementById("play").innerHTML="pause";
      } else {
        thisVideoEl.pause();
        document.getElementById("play").innerHTML="play_arrow";
      }

    }
  }

}

let meuVideo = document.getElementById("videopag");

  function play(){
    if (meuVideo.paused){
        document.getElementById("play").innerHTML="pause";
        meuVideo.play();
    }
    else{
      meuVideo.pause();
      document.getElementById("play").innerHTML="play_arrow";
    }
}

function mute(){
  if (meuVideo.muted){
    document.getElementById("mute").innerHTML="volume_up";
    meuVideo.muted = false;
  }
  else{
    document.getElementById("mute").innerHTML="volume_off";
    meuVideo.muted=true;
  }
}