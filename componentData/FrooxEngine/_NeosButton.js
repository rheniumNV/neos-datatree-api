const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Style: {
    ID: "431c7ed0-112f-48ef-9dc7-4ce05c50db28",
    Data: null,
  },
  AcceptPhysicalTouch: {
    ID: "07b57e00-992d-4692-8634-b8bf4e2f7412",
    Data: true,
  },
  AcceptRemoteTouch: {
    ID: "0816f627-baaf-4d28-9c42-444503fcb7e0",
    Data: true,
  },
  Color: {
    ID: "f4fd98a8-79af-489a-9f55-0f03cfe69ff9",
    Data: [0, 0, 0, 0],
  },
  Width: {
    ID: "ff15d850-42b2-4170-a7a0-90da2643669d",
    Data: 0.25,
  },
  Height: {
    ID: "d9172714-ebdd-4758-a62e-2989eba8aa8a",
    Data: 0.05000000074505806,
  },
  Thickness: {
    ID: "0f5055ff-5dfe-4454-89b9-d7755d3d3255",
    Data: 0.004999999888241291,
  },
  Slant: {
    ID: "a0ff6d60-b626-4568-a024-3e90e06ea3ec",
    Data: 22.5,
  },
  IsEnabled: {
    ID: "9e8ed5af-1f10-4f35-8c31-7bc9342429b2",
    Data: true,
  },
  Pressed: {
    ID: "0e246730-cfef-4f13-94b4-e377d846c847",
    Data: {
      Target: null,
    },
  },
  Pressing: {
    ID: "cfca4946-95f1-4bd7-a3fd-c1fe1180826b",
    Data: {
      Target: null,
    },
  },
  Released: {
    ID: "22a7d0dd-b49b-4a56-be2a-80e55e24355b",
    Data: {
      Target: null,
    },
  },
  IsPressed: {
    ID: "8da8ac14-801a-4f65-9d80-4016694d5d71",
    Data: false,
  },
  AcceptOutOfSightTouch: {
    ID: "09c6ea83-1e2a-4943-b197-edba3e2c3cf8",
    Data: false,
  },
  _textSlot: {
    ID: "767c5e08-03a6-4ab7-a480-a1c4609fb490",
    Data: "4c8346b8-7c76-46bd-853d-d012cc54bc0a",
  },
  _textRenderer: {
    ID: "7d76df5e-c2d6-4033-9bdf-4fed3e5cae92",
    Data: "0de5340d-fe97-4f3e-bf2a-894e999b2e64",
  },
  _buttonPosition: {
    ID: "8d86210a-c35a-4f93-9f85-710aa546aca0",
    Data: "d41a6df8-ca39-4412-9d50-99f6d79beb62",
  },
  _colliderSize: {
    ID: "5e2d0a85-21ea-484c-99aa-15b9ef7e73e7",
    Data: "478aa175-9034-4275-b7d4-e563cbb52d84",
  },
  _colliderOffset: {
    ID: "945dc685-91f7-4b79-b700-fa3e067a824b",
    Data: "30e398e8-05df-4a8e-ba7b-f14af7248753",
  },
  _textPosition: {
    ID: "e10409c5-2d62-431e-ba94-6ced67b543c1",
    Data: "49755446-89ae-4ed8-8202-aaad7125aadc",
  },
  _textBounds: {
    ID: "b8fd09de-6fba-46bd-9bdf-bfb696b5f4a4",
    Data: "1651ce44-d1ef-4e37-a4f3-36ffda0b85b5",
  },
  _holderMesh: {
    ID: "c1cfc93e-8e59-4774-87e0-75dc21316c09",
    Data: "2d5c0eb8-2635-44dd-b6ec-ad18e41adad7",
  },
  _buttonMesh: {
    ID: "6918005f-fac7-4df1-8dcc-38e67f15c9b4",
    Data: "d1b6bddd-a24a-4076-a7c8-1e764b51fa0f",
  },
  _holderMaterial: {
    ID: "942d8246-7ac7-4cad-9106-4f0381a37c7d",
    Data: "4fd7d8cd-7d25-4093-bb17-a7f838b963a3",
  },
  _buttonMaterial: {
    ID: "a41b658d-082a-425c-9020-6aacd7d0ae97",
    Data: "65708387-b6af-4150-bb9e-785044f4e752",
  },
  _pressDepth: {
    ID: "a74cb211-54e0-44ff-ab21-3dd3644af0d1",
    Data: 0,
  },
  _flashIndex: {
    ID: "fb1540c5-a35d-491a-838a-ed9a3b44e3c7",
    Data: 0,
  },
};

class NeosButton extends IComponent {
  constructor() {
    super("FrooxEngine.NeosButton", {
      Style: GenField(IData, null),
      AcceptPhysicalTouch: GenField(IData, true),
      AcceptRemoteTouch: GenField(IData, true),
      Color: GenField(IData, [0, 0, 0, 0]),
      Width: GenField(IData, 0.25),
      Height: GenField(IData, 0.05000000074505806),
      Thickness: GenField(IData, 0.004999999888241291),
      Slant: GenField(IData, 22.5),
      IsEnabled: GenField(IData, true),
      Pressed: GenField(IData, { Target: null }),
      Pressing: GenField(IData, { Target: null }),
      Released: GenField(IData, { Target: null }),
      IsPressed: GenField(IData, false),
      AcceptOutOfSightTouch: GenField(IData, false),
      _textSlot: GenField(IData, "4c8346b8-7c76-46bd-853d-d012cc54bc0a"),
      _textRenderer: GenField(IData, "0de5340d-fe97-4f3e-bf2a-894e999b2e64"),
      _buttonPosition: GenField(IData, "d41a6df8-ca39-4412-9d50-99f6d79beb62"),
      _colliderSize: GenField(IData, "478aa175-9034-4275-b7d4-e563cbb52d84"),
      _colliderOffset: GenField(IData, "30e398e8-05df-4a8e-ba7b-f14af7248753"),
      _textPosition: GenField(IData, "49755446-89ae-4ed8-8202-aaad7125aadc"),
      _textBounds: GenField(IData, "1651ce44-d1ef-4e37-a4f3-36ffda0b85b5"),
      _holderMesh: GenField(IData, "2d5c0eb8-2635-44dd-b6ec-ad18e41adad7"),
      _buttonMesh: GenField(IData, "d1b6bddd-a24a-4076-a7c8-1e764b51fa0f"),
      _holderMaterial: GenField(IData, "4fd7d8cd-7d25-4093-bb17-a7f838b963a3"),
      _buttonMaterial: GenField(IData, "65708387-b6af-4150-bb9e-785044f4e752"),
      _pressDepth: GenField(IData, 0),
      _flashIndex: GenField(IData, 0),
    });
  }
}

module.exports = NeosButton;
