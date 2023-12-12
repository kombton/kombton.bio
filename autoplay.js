// script.js

var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var clickMessage = document.getElementById("clickMessage");
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (isChrome) {
    // Display the click message for Chrome users
    clickMessage.style.display = 'block';

    // For Chrome, add a click event listener to execute playFirstVideo on user interaction
    document.addEventListener('click', function(event) {
        // Execute the playFirstVideo function when the user clicks anywhere on the page
        playFirstVideo();
    });
}

function playFirstVideo() {
    // Hide the second video and display the first one
    video2.style.display = 'none';
    video1.style.display = 'block';

    // Play the first video
    video1.play();

    // Add an event listener to video1 to execute playSecondVideo when it ends
    video1.addEventListener('ended', playSecondVideo);

    // Hide the click message after the user clicks
    clickMessage.style.display = 'none';
}

function playSecondVideo() {
    // Hide the first video and display the second one
    video1.style.display = 'none';
    video2.style.display = 'block';

    // Play the second video
    video2.play();

    // Add an event listener to video2 to loop it when it ends
    video2.addEventListener('ended', function() {
        // Replay the second video
        video2.currentTime = 0;
        video2.play();
    });
}

// Add your code from video.js here (assuming it doesn't have conflicting variable names or functions)
function playSecondVideo() {
    document.getElementById('video1').style.display = 'none';
    document.getElementById('video2').style.display = 'block';
    document.getElementById('video2').play();
}

document.getElementById('video1').addEventListener('ended', playSecondVideo);
