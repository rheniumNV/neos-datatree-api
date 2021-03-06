const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {};

class ObjectRoot extends IComponent {
  constructor() {
    super("FrooxEngine.ObjectRoot", {});
  }
}

module.exports = ObjectRoot;
