#!/usr/bin/env node
const request = require('superagent');
const yargs = require('yargs');

// Yes there are better ways to do this. No I don't care.
// Make a pull request if it bothers you
yargs
  .command('run', '', async () => {
    const d = Array.isArray(yargs.argv.d) ? yargs.argv.d : [yargs.argv.d];

    for (let package of d) {
      let [name, downloads, version] = package.split('!');
      downloads = downloads || 10;
      version = version || '1.0.0';

      console.log(`Downloading ${name} v${version} ${downloads} times`);

      for (let i = 0; i < +downloads; i++) {
        await request
          .get(`https://registry.npmjs.org/${name}/-/${name}-${version}.tgz`)
          .buffer(true)
          .parse(request.parse['application/octet-stream']);
      }
    }

    process.exit(0);
  })
  .argv;