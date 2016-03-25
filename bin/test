#!/bin/bash

function fetchCache {
  if [ -f $1 ]; then
    tar xf $1 && npm prune
  fi
  npm install && tar cf $1 node_modules
}

set -e
mkdir -p cache

which khaos || npm install -g git+https://github.com/segmentio/khaos.git#a122583
rm -rf ~/.khaos/slackbot
mkdir -p ~/.khaos/slackbot
cp -r . ~/.khaos/slackbot

yes test | khaos create slackbot testbot
pushd testbot && pushd slackbot

fetchCache "../../cache/function-cache.tar"
popd

fetchCache "../cache/project-cache.tar"
npm run lint
npm test
popd

rm -r testbot
