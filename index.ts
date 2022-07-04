import * as fs from 'fs';
import * as bunyan from 'bunyan';

import { promisify } from 'util';
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const renameFile = promisify(fs.rename);

let _log = bunyan.createLogger( {
  name: 'truview.export',
  streams: [
    {
      stream: process.stdout,
      level: "info"
    },
    {
      stream: process.stderr,
      level: "debug"
    },
    {
      type: 'rotating-file',
      path: './log/foo.log',
      period: '1d',   // daily rotation
      count: 3        // keep 3 back copies
    }
  ]
});

var log = _log.child({ func: 'exporter.addSnapShots' });

try {
  log.info('program starts..');

  // rename the SnapShots.xml if it exists
  // renameFile( `output/SnapShots.xml`, `output/SnapShots.old.xml` );

  log.info('program ends..');
} catch (err) {
  log.error(err.message || err);
}