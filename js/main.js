$(function () {

  var $video = $('.camera video');
  var $capture = $('.controls .capture-image');
  var $fullscreen = $('.controls .go-fullscreen');
  var $filters = $('.controls .filter');
  var camera = new Camera($video[0], {
    video: true
  });

  /* Capture image */
  $capture.on('click', function () {
    var image = camera.capture();
    $('.snapshots').append(
      $('<div />')
        .addClass('snapshot')
        .append(
          $('<a />')
            .attr('href', image.src)
            .append(image)
        )
    );
  });

  /* Set fullscreen */
  $fullscreen.on('click', function () {
    var video = $video[0];
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
    else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  });

  /* Set filter */
  $filters.on('click', function () {
    var filter = $(this).data('filter');
    var param = $(this).data('param');
    filter = !!filter ? (filter + '(' + param + ')') : 'none';
    $video.css({
      '-webkit-filter': filter,
      'filter': filter
    });
  });

});
