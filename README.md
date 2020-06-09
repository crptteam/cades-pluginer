# cades-Utils

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

CADES Utils already contains cadesplugin_api.js in own bundle.

## Usage

```javascript

import { CadesUtils as anyName } from "@crpt/cades-utils";
//or
import CadesUtils from "@crpt/cades-utils";
//usually you will need 2 methods

CadesUtils.getFinalCertsArray().then(certs => {
  console.log("certs", certs);
  CadesUtils.signMessage("lalala", certs[0].certificate).then(signed =>
    console.log("signed", signed)
  );
});

```

| method | description |
|---|---|
| getFinalCertsArray(): Promise<Cert[]> | Init plugin, create store, . Cert: {certificate: {}, info: [] }, certificate is an original cadesplugin Certificate object,  info is an array [name, date_from, date_to, serial_number]. |
| signMessage(message, cert, detached): Promise<string>| Sign message with selected certificate. |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
