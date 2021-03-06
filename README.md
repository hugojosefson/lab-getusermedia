# getUserMedia

A simple project focusing on `getUserMedia` for lab purposes.

**Note:** CSS filters are not available in Firefox without hassle. In other words, they're not available in this project either.

## Getting Started

Cloning the repository and installing dependencies:

```
git clone git@github.com:jlowgren/lab-getusermedia.git
cd lab-getusermedia
bower install
```

You will probably need to run a local web server to get access to the camera:

```
npm install -g http-server
http-server
```

Or...

```
python -m SimpleHTTPServer
```

## Tasks

Here's a few suggestions in ways that functionality could be improved:

* Apply filters on captured images by manipulating the `canvas` data.
* Multiple filters simultaneously, e.g. grayscale and higher contrast.
* Manipulate image based on microphone input volume (requires audio analysis through the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web_Audio_API)).
* Add a `slider` element to adjust the intensity of each individual filter. 

## Helpful Links

* [API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia)
* [Capturing Audio & Video in HTML5](http://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* [Image Filters with Canvas](http://www.html5rocks.com/en/tutorials/canvas/imagefilters/)
* [Getting Started with Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/)
