// npm - global command, comes with node
// npm -v

// local dependency - use it only in this local project
// npm i <packageName>

// global dependency - use it in any global project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (store important info about project/package)
// manual approach - create package.json in the root, create properties etc
// npm init (step by step - press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)