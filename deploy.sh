#!/bin/bash
set -e
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/giorgiofederici-frontend root@$FRONTEND_HOST:/var/www