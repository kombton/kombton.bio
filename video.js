function playSecondVideo() {
    document.getElementById('video1').style.display = 'none';
    document.getElementById('video2').style.display = 'block';
    document.getElementById('video2').play();
  }
  
  document.getElementById('video1').addEventListener('ended', playSecondVideo);