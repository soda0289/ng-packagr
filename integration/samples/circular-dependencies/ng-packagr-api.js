import ngPackage from '../../../dist/src/public_api.js';
import path from 'path';

ngPackage
  .ngPackagr()
  .forProject(path.join(import.meta.dirname, 'ng-package.json'))
  .withTsConfig(path.join(import.meta.dirname, 'tsconfig.ngc.json'))
  .build({
    allowCircularDependencies: true,
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
