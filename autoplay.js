// script.js

var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var clickMessage = document.getElementById("clickMessage");
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

// Display the click message only for Chrome users
if (isChrome) {
    clickMessage.style.display = 'block';

    document.addEventListener('click', function(event) {
        playFirstVideo();
    });
}

function playFirstVideo() {
    video2.style.display = 'none';
    video1.style.display = 'block';
    video1.play();

    video1.addEventListener('ended', playSecondVideo);

    clickMessage.style.display = 'none';
}

function playSecondVideo() {
    video1.style.display = 'none';
    video2.style.display = 'block';
    video2.play();

    video2.addEventListener('ended', function() {
        video2.currentTime = 0;
        video2.play();
    });
}

function playSecondVideo() {
    document.getElementById('video1').style.display = 'none';
    document.getElementById('video2').style.display = 'block';
    document.getElementById('video2').play();
}

document.getElementById('video1').addEventListener('ended', playSecondVideo);