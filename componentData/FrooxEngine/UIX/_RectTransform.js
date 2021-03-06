const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  AnchorMin: {
    ID: "a4dde25d-0b9c-4845-8dc8-af1187c40ee6",
    Data: [0, 0],
  },
  AnchorMax: {
    ID: "33d550da-19e5-4801-991b-56787e717817",
    Data: [1, 1],
  },
  OffsetMin: {
    ID: "87ceec80-1239-4852-97f4-a84151210e97",
    Data: [0, 0],
  },
  OffsetMax: {
    ID: "7c85897c-93cb-4eca-aa98-7888b8ee679d",
    Data: [0, 0],
  },
  Pivot: {
    ID: "c8c48f3c-79a8-4c4f-ae70-257d44d26d35",
    Data: [0.5, 0.5],
  },
};

class RectTransform extends IComponent {
  constructor() {
    super("FrooxEngine.UIX.RectTransform", {
      AnchorMin: GenField(IData, [0, 0]),
      AnchorMax: GenField(IData, [1, 1]),
      OffsetMin: GenField(IData, [0, 0]),
      OffsetMax: GenField(IData, [0, 0]),
      Pivot: GenField(IData, [0.5, 0.5]),
    });
  }
}

module.exports = RectTransform;
