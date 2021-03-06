const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  HighPriorityIntegration: {
    ID: "b9c39a0d-d45a-4650-ad38-f8331a50bcb2",
    Data: false,
  },
  OverrideBoundingBox: {
    ID: "984485fe-e5f2-4aae-8c30-b7e3d914a7f9",
    Data: false,
  },
  OverridenBoundingBox: {
    ID: "9d5f6ec8-1741-49d6-9e99-aaa311140141",
    Data: {
      Min: [0, 0, 0],
      Max: [0, 0, 0],
    },
  },
  Size: {
    ID: "99e540f2-b9c5-4b37-8c20-5f58fce83707",
    Data: [1, 1, 1],
  },
  UVScale: {
    ID: "7a3bb182-0086-4d80-bcbc-e7c5dedbfc9b",
    Data: [1, 1, 1],
  },
  ScaleUVWithSize: {
    ID: "c3535229-91e6-47e9-b523-78c84753f50b",
    Data: false,
  },
};

class BoxMesh extends IComponent {
  constructor() {
    super("FrooxEngine.BoxMesh", {
      HighPriorityIntegration: GenField(IData, false),
      OverrideBoundingBox: GenField(IData, false),
      OverridenBoundingBox: GenField(IData, { Min: [0, 0, 0], Max: [0, 0, 0] }),
      Size: GenField(IData, [1, 1, 1]),
      UVScale: GenField(IData, [1, 1, 1]),
      ScaleUVWithSize: GenField(IData, false),
    });
  }
}

module.exports = BoxMesh;
