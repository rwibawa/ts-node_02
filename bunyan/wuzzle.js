var bunyan = require('bunyan');
var log = bunyan.createLogger({ name: 'myapp'});

function Wuzzle(options) {
  this.log = options.log.child({ widget_type: 'wuzzle'});
  this.log.info('creating a wuzzle');
}

Wuzzle.prototype.woos = () => {
  this.log.warn('This wuzzle is woosey.');
}

log.info('start');
var wuzzle = new Wuzzle({log: log});
wuzzle.woos();
log.info('done');