/**
 * Camera API
 */


/**
 * The constructor takes one parameter, specifying the video element.
 * @param {Object} element
 * @param {Object} opts
 */
function Camera(element, opts) {
  opts = opts || {};

  navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  );

  if (navigator.getUserMedia) {
    var self = this;

    this.localMediaStream = null;
    this.video = element;

    navigator.getUserMedia(opts, function (stream) {
      self.localMediaStream = stream;
      self.video.src = window.URL.createObjectURL(stream);
    }, function (err) {
      console.error(err);
    });
  }
}


/**
 * Takes a snapshot from the video stream and returns it as an image element.
 * @return {Object}
 */
Camera.prototype.capture = function () {
  if (!this.localMediaStream) {
    return;
  }

  var image = document.createElement('img');
  var canvas = document.createElement('canvas');
  canvas.width = this.video.clientWidth;
  canvas.height = this.video.clientHeight;
  var context = canvas.getContext('2d');

  document.documentElement.appendChild(canvas);

  context.drawImage(this.video, 0, 0);
  image.src = canvas.toDataURL();

  // We're finished with the canvas element
  canvas.remove();

  return image;
};
