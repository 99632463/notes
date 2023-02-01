const path = require('path');
const fs = require('fs');
const vm = require('vm');

class Module {
  constructor(id) {
    this.id = id;
    this.exports = {};
  }
}
Module.cache = {};
Module.extensions = {
  '.js': function (module) {
    const content = fs.readFileSync(module.id).toString();
    const join = Module.wrapper[0] + content + Module.wrapper[1];
    const run = vm.runInNewContext(join);
    run.call(module.exports, module.exports);
  },
  '.json': function (module) {
    const getContent = fs.readFileSync(module.id);
    const result = JSON.parse(getContent);
    module.exports = result;
  }
}
Module.wrapper = [
  '(function(exports) {',
  '\n})'
];

function myRequire(rp) {
  const abPath = path.join(__dirname, rp);
  const module = Module.cache[abPath];
  if (module) {
    return module.exports;
  }
  const createModuleObject = new Module(abPath);
  tryLoadModule(createModuleObject);

  return createModuleObject.exports;
}

function tryLoadModule(module) {
  const moduleId = module.id;
  const extname = path.extname(moduleId);

  Module.extensions[extname](module);
}

const res = myRequire('./test.js');
console.log('res: ', res.name);