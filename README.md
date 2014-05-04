# Camera API

Creating something useful out of `getUserMedia`.

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
* Manipulate image based on microphone input volume.

## Helpful Links

* [Capturing Audio & Video in HTML5](http://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* [Image Filters with Canvas](http://www.html5rocks.com/en/tutorials/canvas/imagefilters/)
