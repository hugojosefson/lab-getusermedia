(function () {

  var main = document.querySelector('.main');
  var snapshots = document.querySelector('.snapshots');
  var canvas = document.querySelector('canvas');
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
        var video = document.querySelector('video');
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
      image.src = canvas.toDataURL();
      listItem.appendChild(image);
      snapshots.appendChild(listItem);
    }
  }

  init();

})();
