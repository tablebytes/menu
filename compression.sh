#!/bin/bash

node database/seed.js | gzip -c > data.gz

gunzip -c data.gz | node test.js
