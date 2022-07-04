# ts-node_02
Learn *ts-node* and *bunyan* logger.

# 1. Setup
```sh
$ npm i -D typescript tslib @types/node ts-node @types/bunyan
$ npm i -S cross-env bunyan

# node modules binaries
$ ll node_modules/.bin/
```

# 2. Bunyan logger:
```sh
$ npm run dev:ts
$ cat log/foo.log | node_modules/.bin/bunyan
[2022-07-04T19:39:24.473Z]  INFO: truview.export/3172 on GEO-WCND1383YRS: program starts.. (func=exporter.addSnapShots)
[2022-07-04T19:39:24.473Z]  INFO: truview.export/3172 on GEO-WCND1383YRS: program ends.. (func=exporter.addSnapShots)
```

Note:
 Avoid "stdout is not a tty" error on Win10:
 ```sh
 $ bash -c "cross-env ENV=development ts-node index.ts | bunyan"
 $ bash -c "node bunyan/hi.js | node_modules/.bin/bunyan"
 ```

# 3. *ts-node*:
```sh
$ node_modules/.bin/ts-node
> .exit

```