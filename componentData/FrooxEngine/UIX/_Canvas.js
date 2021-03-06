const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Size: {
    ID: "acc49925-3f26-4bd0-a55a-484166e9b275",
    Data: [1, 1],
  },
  EditModeOnly: {
    ID: "179681d3-e8d0-411c-be41-99d8015becf6",
    Data: false,
  },
  AcceptRemoteTouch: {
    ID: "35467e16-18f1-4277-bdc6-22d1e47b5d13",
    Data: true,
  },
  AcceptPhysicalTouch: {
    ID: "fc927c81-62e9-4e25-b81c-7858aef471e3",
    Data: true,
  },
  AcceptExistingTouch: {
    ID: "9129e1c2-a6b8-43f7-9af5-9db1306e82ec",
    Data: false,
  },
  HighPriorityIntegration: {
    ID: "0d09ba0c-71c3-41ab-9e63-718a664ac353",
    Data: false,
  },
  IgnoreTouchesFromBehind: {
    ID: "5154448c-9feb-4f81-86c5-ecfc1d3f690f",
    Data: true,
  },
  BlockAllInteractions: {
    ID: "5e048924-1561-4640-b377-e4f0c8f43697",
    Data: false,
  },
  LaserPassThrough: {
    ID: "bf3a8a60-d7e6-4a0a-a79a-62d1b296df51",
    Data: false,
  },
  PixelScale: {
    ID: "4c1687d1-9e38-4590-b2ee-0289c7c10228",
    Data: 1,
  },
  _rootRect: {
    ID: "9b396d95-515a-418a-9544-cba747c38689",
    Data: "db991b52-1aa0-49c2-a289-7dc9cc7566f1",
  },
  Collider: {
    ID: "20a4c5ae-c7b3-4647-b8f0-a9124b1328a1",
    Data: "857a76f3-9f5a-415a-a784-c9deb3fe0e3c",
  },
  _colliderSize: {
    ID: "9cc8d6f9-c30d-4064-947b-ac60b0930226",
    Data: "ef684281-9299-467b-bc78-f41507c24d38",
  },
  _colliderOffset: {
    ID: "03e64998-74ed-477f-a6da-66748949955f",
    Data: "a6e2508e-8334-4d77-9f3b-df88d7744ea6",
  },
  StartingOffset: {
    ID: "92d27e6c-6468-4589-8144-53a0335f634c",
    Data: -32000,
  },
  StartingMaskDepth: {
    ID: "0e32b3ea-9de9-4811-94c5-cb839d6d1d08",
    Data: 0,
  },
};

class Canvas extends IComponent {
  constructor() {
    super("FrooxEngine.UIX.Canvas", {
      Size: GenField(IData, [1, 1]),
      EditModeOnly: GenField(IData, false),
      AcceptRemoteTouch: GenField(IData, true),
      AcceptPhysicalTouch: GenField(IData, true),
      AcceptExistingTouch: GenField(IData, false),
      HighPriorityIntegration: GenField(IData, false),
      IgnoreTouchesFromBehind: GenField(IData, true),
      BlockAllInteractions: GenField(IData, false),
      LaserPassThrough: GenField(IData, false),
      PixelScale: GenField(IData, 1),
      _rootRect: GenField(IData, "db991b52-1aa0-49c2-a289-7dc9cc7566f1"),
      Collider: GenField(IData, "857a76f3-9f5a-415a-a784-c9deb3fe0e3c"),
      _colliderSize: GenField(IData, "ef684281-9299-467b-bc78-f41507c24d38"),
      _colliderOffset: GenField(IData, "a6e2508e-8334-4d77-9f3b-df88d7744ea6"),
      StartingOffset: GenField(IData, -32000),
      StartingMaskDepth: GenField(IData, 0),
    });
  }
}

module.exports = Canvas;
