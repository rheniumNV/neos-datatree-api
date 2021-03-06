const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Offset: {
    ID: "a6e2508e-8334-4d77-9f3b-df88d7744ea6",
    Data: [0, 0, 0],
  },
  Type: {
    ID: "9d834192-630a-447a-a467-39d5c41ad4f4",
    Data: "Static",
  },
  CharacterCollider: {
    ID: "df4c44f7-2e37-44a3-947d-c7f4965e6080",
    Data: false,
  },
  IgnoreRaycasts: {
    ID: "6026f5e1-296c-48fe-9bce-b0f9a7a27862",
    Data: false,
  },
  Size: {
    ID: "ef684281-9299-467b-bc78-f41507c24d38",
    Data: [1, 1, 0],
  },
};

class BoxCollider extends IComponent {
  constructor() {
    super("FrooxEngine.BoxCollider", {
      Offset: GenField(IData, [0, 0, 0]),
      Type: GenField(IData, "Static"),
      CharacterCollider: GenField(IData, false),
      IgnoreRaycasts: GenField(IData, false),
      Size: GenField(IData, [1, 1, 0]),
    });
  }
}

module.exports = BoxCollider;
