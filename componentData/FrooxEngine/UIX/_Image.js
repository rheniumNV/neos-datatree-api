const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Sprite: {
    ID: "9ba0e26b-57f9-450c-827c-cdd23ee071f5",
    Data: null,
  },
  Material: {
    ID: "2d273ca3-aed1-49a3-b950-ab2771f19e8b",
    Data: null,
  },
  Tint: {
    ID: "4384d7d3-1992-450e-b7ca-6fd146e91ce0",
    Data: [1, 1, 1, 1],
  },
  PreserveAspect: {
    ID: "1d7cecab-9fd9-4eba-9335-b12f82ca854f",
    Data: true,
  },
  NineSliceSizing: {
    ID: "f31150b0-4a18-45ce-9950-15221e4822ad",
    Data: "TextureSize",
  },
  InteractionTarget: {
    ID: "be6b8845-ec94-4190-9d1e-0e8315b62661",
    Data: true,
  },
  "__legacyZWrite-ID": "72cafba2-79e3-4af1-89cb-d3a7b8f4aea4",
};

class Image extends IComponent {
  constructor() {
    super("FrooxEngine.UIX.Image", {
      Sprite: GenField(IData, null),
      Material: GenField(IData, null),
      Tint: GenField(IData, [1, 1, 1, 1]),
      PreserveAspect: GenField(IData, true),
      NineSliceSizing: GenField(IData, "TextureSize"),
      InteractionTarget: GenField(IData, true),
      "__legacyZWrite-ID": "72cafba2-79e3-4af1-89cb-d3a7b8f4aea4",
    });
  }
}

module.exports = Image;
