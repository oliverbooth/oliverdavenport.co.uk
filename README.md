<h1 align="center">Oliver Davenport<br>
  <img src="https://olivr.me/i/git/subtitle.png" style="text-align:center;">
</h1>
<p align="center">source for <a href="https://oliverdavenport.co.uk/">oliverdavenport.co.uk</a>
</p>

## Disclaimer
This source code is open for educational purposes, and I encourage you to clone, poke around, and experiment with these files to learn - but the content of the site is copyrighted. [And, besides. It's my name anyway! :)]

## Prerequisites
* [node](https://nodejs.org/) in PATH
* [Ruby](https://www.ruby-lang.org/)

## Building
```bash
npm install
grunt initial
```

The `initial` task runs `grunt-contrib-copy` where `default` runs `grunt-copy-modified`.

Output is found in the `dist/` directory.
