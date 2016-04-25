#!/usr/bin/env sh

PACKAGES=(
  test-utils
  test-utils-react
  )

for PACKAGE in ${PACKAGES[@]}; do
  echo "building ${PACKAGE}"
  babel packages/${PACKAGE}/src/ --ignore __*__ --out-dir packages/${PACKAGE}/lib/
done
