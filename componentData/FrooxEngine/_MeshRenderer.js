const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Mesh: {
    ID: "444fd617-7061-4376-b876-dbc0afb4e497",
    Data: "d1b6bddd-a24a-4076-a7c8-1e764b51fa0f",
  },
  Materials: {
    ID: "d4fae5c2-f20e-42bb-880c-cc15215d2ec9",
    Data: [
      {
        ID: "7d02b52c-30d9-4744-a6a4-d0a491a5a09e",
        Data: "65708387-b6af-4150-bb9e-785044f4e752",
      },
    ],
  },
  MaterialPropertyBlocks: {
    ID: "d2baddfe-fb1b-40f0-90b8-39d07146a54f",
    Data: [],
  },
  ShadowCastMode: {
    ID: "14475222-f74a-4209-b884-9f6b324c1cbe",
    Data: "On",
  },
  SortingOrder: {
    ID: "494bb79d-4b18-427c-8211-1ac66127700b",
    Data: 0,
  },
};

class MeshRenderer extends IComponent {
  constructor() {
    super("FrooxEngine.MeshRenderer", {
      Mesh: GenField(IData, null),
      Materials: GenField(IData, []),
      MaterialPropertyBlocks: GenField(IData, []),
      ShadowCastMode: GenField(IData, "On"),
      SortingOrder: GenField(IData, 0),
    });
  }
}

module.exports = MeshRenderer;
