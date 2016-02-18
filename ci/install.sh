#!/bin/bash

npm install -g khaos
khaos install localytics/slackbot-scaffold slackbot

pushd ~/.khaos/slackbot
if [[ $TRAVIS_PULL_REQUEST != "false" ]]; then
  git fetch origin +refs/pull/$TRAVIS_PULL_REQUEST/merge
  git checkout -qf FETCH_HEAD
else
  git checkout $TRAVIS_COMMIT
fi
popd

yes test | khaos create slackbot testbot
pushd testbot/nodejs
npm install
popd
