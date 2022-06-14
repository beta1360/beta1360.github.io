#!/usr/bin/env sh

set -e

yarn docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m '$1'

git push -f https://github.com/beta1360/beta1360.github.io master:gh-pages

cd -