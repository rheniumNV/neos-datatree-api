const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  RelativeToUserRoot: {
    ID: "12ce1db9-f018-4807-b509-25ed962f9d4c",
    Data: true,
  },
  SavedRotation: {
    ID: "fa175141-42b6-4845-94d7-ac26d6c4a1b9",
    Data: [
      0.01430613361299038,
      -0.1618208885192871,
      -0.3401341736316681,
      0.9262385964393616,
    ],
  },
  SavedScale: {
    ID: "0e71ec8e-70c1-4af9-a065-6a044af5cc7f",
    Data: [1, 1, 1],
  },
};

class InventoryItem extends IComponent {
  constructor() {
    super("FrooxEngine.InventoryItem", {
      RelativeToUserRoot: GenField(IData, true),
      SavedRotation: GenField(IData, [
        0.01430613361299038,
        -0.1618208885192871,
        -0.3401341736316681,
        0.9262385964393616,
      ]),
      SavedScale: GenField(IData, [1, 1, 1]),
    });
  }
}

module.exports = InventoryItem;
