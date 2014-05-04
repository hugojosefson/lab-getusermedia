# Camera API

A simple project focusing on `getUserMedia` for lab purposes.

## Getting Started

Cloning the repository and installing dependencies:

```
git clone git@github.com:jlowgren/camera-api.git
cd camera-api
bower install
```

You will probably need to run a local web server to get access to the camera:

```
npm install http-server
http-server
```

Or...

```
python -m SimpleHTTPServer
```

## Tasks

Here's a few suggestions of ways that functionality could be improved:

* Apply filters on captured images by manipulating the `canvas` data.
* Multiple filters simultaneously, e.g. grayscale and higher contrast.
* Manipulate image based on microphone input volume (requires audio analysis through the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web_Audio_API)).

## Helpful Links

* [Capturing Audio & Video in HTML5](http://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* [Image Filters with Canvas](http://www.html5rocks.com/en/tutorials/canvas/imagefilters/)
* [Getting Started with Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/)
