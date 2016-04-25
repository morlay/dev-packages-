#!/usr/bin/env sh

PACKAGES=(
  babel-presets
  babel-presets-react
  eslint-config
  eslint-config-react
  test-utils
  test-utils-react
  )

for PACKAGE in ${PACKAGES[@]}; do
  echo "Checking ${PACKAGE}"
  ncu --packageFile packages/${PACKAGE}/package.json
done
