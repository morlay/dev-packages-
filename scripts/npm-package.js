// @flow

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import packageJSON from '../package.json';

type PackageJSON = {
  version?: string,
  name?: string,
  main?: string,
  bin?: {
    [key: string]: string
  },
  dependencies?: {
    [key: string]: string | boolean
  },
  packages?: {
    [key: string]: PackageJSON
  }
}

const sortObject = (obj: Object) =>
  _.pick(obj, _.sortBy(_.keys(obj)));

const generatePackages = (pkgJSON: PackageJSON = {}) =>
  _.mapValues(pkgJSON.packages, (subPkgJSON: PackageJSON) =>
    sortObject({
      ..._.pick(pkgJSON, ['version', 'license', 'engines']),
      ...subPkgJSON,
      dependencies: _.pick(pkgJSON.dependencies, _.keys(subPkgJSON.dependencies)),
    }));


const packages = generatePackages(packageJSON);

_.forEach(packages, (pkgJSON: PackageJSON, key: string) => {
  fs.writeFileSync(
    path.join(process.cwd(), 'packages', key, 'package.json'),
    new Buffer(JSON.stringify(pkgJSON, null, 2)),
  );
});
