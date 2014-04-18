$(function () {

  var $video = $('.camera video');
  var $capture = $('.controls .capture-image');
  var camera = new Camera($video[0], {video: true});

  $capture.on('click', function (event) {
    event.preventDefault();

    var image = camera.capture();
    $('.snapshots').append(image);
  });
});
