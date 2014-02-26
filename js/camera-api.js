(function () {

  var main = document.querySelector('.main');
  var snapshots = document.querySelector('.snapshots');
  var canvas = document.querySelector('canvas');
  var video = document.querySelector('video');
  var context = canvas.getContext('2d');
  var localMediaStream = null;

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
        localMediaStream = stream;
        video.src = window.URL.createObjectURL(stream);
      }, function (err) {
        console.error(err);
      });

      var captureButton = document.querySelector('button');
      captureButton.addEventListener('click', captureImage, false);
    } else {
      alert('Your browser is old. :(');
    }
  }

  function captureImage() {
    var listItem = document.createElement('li');
    var image = document.createElement('img');

    if (localMediaStream) {
      context.drawImage(video, 0, 0);
      image.src = canvas.toDataURL('image/webp');
      listItem.appendChild(image);
      snapshots.appendChild(listItem);
    }
  }

  init();

})();
