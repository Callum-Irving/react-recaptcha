#! /bin/bash
git subtree push --prefix server origin server
cd client
npm run deploy
cd ..