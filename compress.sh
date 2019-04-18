#!/bin/bash

node database/seed.js | gzip -c > data.gz
