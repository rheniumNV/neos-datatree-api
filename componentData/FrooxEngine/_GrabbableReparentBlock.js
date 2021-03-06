const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  DontReparent: {
    ID: "f6394fdd-22d9-43bb-bc73-9b7cc6211261",
    Data: true,
  },
  MaxDepth: {
    ID: "9f53aecb-955b-42e7-857a-9cd572ee4021",
    Data: 1,
  },
};

class GrabbableReparentBlock extends IComponent {
  constructor() {
    super("FrooxEngine.GrabbableReparentBlock", {
      DontReparent: GenField(IData, true),
      MaxDepth: GenField(IData, 1),
    });
  }
}

module.exports = GrabbableReparentBlock;
