#!/bin/bash

echo "Deploy to 1st netlify site:"
netlifyctl deploy

echo "Deploy to 5y6q netlify site:"
netlifyctl -C netlify-5y6q.toml deploy

echo "Deploy to 5y6q.surge.sh:"
surge build https://5y6q.surge.sh
