function init() {
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);

  if (navigator.getUserMedia) {
    var opts = {
      video: true
    };
    navigator.getUserMedia(opts, function (stream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(stream);
    }, function (err) {
      console.error(err);
    });

    var captureButton = document.querySelector('button');
    captureButton.addEventListener('click', function (event) {
      event.preventDefault();
      captureImage();
    });
  }
  else {
    alert('Your browser is old. :(');
  }
}

function captureImage() {
  console.log('Capturing image...');
}

window.onload = function () {
  init();
};
