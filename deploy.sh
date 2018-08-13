#!/bin/bash

echo "Deploy to netlify:"
netlifyctl deploy

echo "Deploy to 5y6q.surge.sh:"
surge build https://5y6q.surge.sh
