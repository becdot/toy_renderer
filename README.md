# TODO
- Add functional testing to assert 200 OK response
- Split out middleware and add tests
- Split out controller actions and add tests
- Be able to POST an image to the endpoint, render it
- Export image in variety of formats (e.g. jpeg, png, pdf, etc)
- Supply rendering options (e.g. font, text size, background color, positioning, layering, etc)
- Compare against Sumo Paint options
- Dockerize
- Add queue / webhook / pub-sub / etc to deal with processing time requirements and asynchronicity
- Look into Cairo and GM testing patterns etc
- Look into image diffing test

Dockerize:
--debugging

docker run --rm -it [3dc9eeb3ba86] /bin/bash

# DONE
- Renders text into a canvas, returns a base64-encoded string
