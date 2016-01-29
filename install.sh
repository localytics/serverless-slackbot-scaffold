npm install -g khaos
khaos install localytics/slackbot-scaffold slackbot

pushd ~/.khaos/slackbot
if [[ $TRAVIS_PULL_REQUEST == "true" ]]; then
  git checkout $TRAVIS_COMMIT
else
  git checkout $TRAVIS_BRANCH
fi
popd

yes test | khaos create slackbot testbot
pushd testbot/nodejs
npm install
popd
