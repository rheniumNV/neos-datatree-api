const { IComponent, GenField, IData } = require("../core");

const origin = {}

class ObjectRoot extends IComponent {
  constructor() {
    super("FrooxEngine.ObjectRoot", {});
  }
}

module.exports = ObjectRoot;
