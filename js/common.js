/**
 * Common functionality
 */


/**
 * Returns non-null if getUserMedia is available
 * @return {function}
 */
function supportsGetUserMedia() {
  navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  );

  return navigator.getUserMedia;
}
