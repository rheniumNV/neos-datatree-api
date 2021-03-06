const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  BaseColor: {
    ID: "a8936fe7-1443-4f65-9fa2-7d61ba02826d",
    Data: [1, 1, 1, 1],
  },
  ColorDrivers: {
    ID: "b5dafdce-6e41-4bc1-bbd6-399bd2f059c5",
    Data: [
      {
        ID: "64233e46-0ddc-463e-a521-5840854db092",
        ColorDrive: {
          ID: "0fdbcb1b-56bb-4d99-bf45-884a6331afea",
          Data: "4384d7d3-1992-450e-b7ca-6fd146e91ce0",
        },
        TintColorMode: {
          ID: "fbbd70ab-12af-4758-a7ba-75a8e4db0241",
          Data: "Explicit",
        },
        NormalColor: {
          ID: "bdd41d06-7f79-4b67-8202-9480c9bb9147",
          Data: [1, 1, 1, 1],
        },
        HighlightColor: {
          ID: "fb1e3d9c-c956-4146-af5f-e305c938ae1b",
          Data: [0.75, 0.75, 0.75, 1],
        },
        PressColor: {
          ID: "80d89136-c16e-4d79-87a6-49e119a4842a",
          Data: [0.5, 0.5, 0.5, 1],
        },
        DisabledColor: {
          ID: "a6df418f-8661-417b-85bb-54c69bdbfea1",
          Data: [0.6499999761581421, 0.6499999761581421, 0.6499999761581421, 1],
        },
      },
    ],
  },
  "__legacy_NormalColor-ID": "4a83a864-8e68-473e-8ae5-495aa444910a",
  "__legacy_HighlightColor-ID": "0d4bfea5-817e-4dc8-965d-03959fbe1de9",
  "__legacy_PressColor-ID": "c8872bb9-8e11-424c-98d0-c1b84e75b0fb",
  "__legacy_DisabledColor-ID": "663ac1ca-3fff-4559-89db-586ef6e8e821",
  "__legacy_TintColorMode-ID": "fcef6c4f-d297-489a-99e9-9e68fbcc02f7",
  "__legacy_ColorDrive-ID": "4704beda-7d8d-469c-ba3e-9fd6fa6c9761",
  IsPressed: {
    ID: "9f8d966d-eec3-4f2c-ab36-c70b222546c2",
    Data: false,
  },
  IsHovering: {
    ID: "ffdd96ca-a9ee-4fc5-b987-4a63f4290110",
    Data: false,
  },
  HoverVibrate: {
    ID: "547a5b33-7bb6-435d-bada-30511585a4e3",
    Data: "Short",
  },
  PressVibrate: {
    ID: "b999d2e1-c0bc-4325-ab03-76e7ba4fd13b",
    Data: "Medium",
  },
  ClearFocusOnPress: {
    ID: "6b23f212-c1a5-4541-abc3-97ca90a860d6",
    Data: true,
  },
  PassThroughHorizontalMovement: {
    ID: "5cea512f-e0dd-4da8-889d-dae4c9a34af7",
    Data: true,
  },
  PassThroughVerticalMovement: {
    ID: "7f74bf99-501a-41c4-aee9-9ae3d8ee2782",
    Data: true,
  },
  RequireLockInToPress: {
    ID: "eadbb2c8-5637-4f15-8015-23472169707f",
    Data: false,
  },
  RequireInitialPress: {
    ID: "695323a6-97fa-4234-a290-db9410b6b4c6",
    Data: true,
  },
  PressPoint: {
    ID: "301bfcba-d10e-4aec-9695-7cf1c91bbf74",
    Data: [0, 0],
  },
  Pressed: {
    ID: "b17afe32-0f70-4898-ba5c-f55ef3884204",
    Data: {
      Target: null,
    },
  },
  Pressing: {
    ID: "a3fd81bb-cedd-4a9d-b928-c5477f14e5a0",
    Data: {
      Target: null,
    },
  },
  Released: {
    ID: "f80f9fac-3ec7-4090-95a2-016769d92b2d",
    Data: {
      Target: null,
    },
  },
  HoverEnter: {
    ID: "2a868ab4-32a7-46ec-acca-661843293906",
    Data: {
      Target: null,
    },
  },
  HoverStay: {
    ID: "8e71f981-cf51-4000-921f-a7cc8027efc9",
    Data: {
      Target: null,
    },
  },
  HoverLeave: {
    ID: "61cc1a2f-12dd-4094-ad78-f64bc584ba60",
    Data: {
      Target: null,
    },
  },
};

class Button extends IComponent {
  constructor() {
    super("FrooxEngine.UIX.Button", {
      BaseColor: GenField(IData, [1, 1, 1, 1]),
      ColorDrivers: GenField(IData, [
        {
          ID: "64233e46-0ddc-463e-a521-5840854db092",
          ColorDrive: {
            ID: "0fdbcb1b-56bb-4d99-bf45-884a6331afea",
            Data: "4384d7d3-1992-450e-b7ca-6fd146e91ce0",
          },
          TintColorMode: {
            ID: "fbbd70ab-12af-4758-a7ba-75a8e4db0241",
            Data: "Explicit",
          },
          NormalColor: {
            ID: "bdd41d06-7f79-4b67-8202-9480c9bb9147",
            Data: [Array],
          },
          HighlightColor: {
            ID: "fb1e3d9c-c956-4146-af5f-e305c938ae1b",
            Data: [Array],
          },
          PressColor: {
            ID: "80d89136-c16e-4d79-87a6-49e119a4842a",
            Data: [Array],
          },
          DisabledColor: {
            ID: "a6df418f-8661-417b-85bb-54c69bdbfea1",
            Data: [Array],
          },
        },
      ]),
      "__legacy_NormalColor-ID": "4a83a864-8e68-473e-8ae5-495aa444910a",
      "__legacy_HighlightColor-ID": "0d4bfea5-817e-4dc8-965d-03959fbe1de9",
      "__legacy_PressColor-ID": "c8872bb9-8e11-424c-98d0-c1b84e75b0fb",
      "__legacy_DisabledColor-ID": "663ac1ca-3fff-4559-89db-586ef6e8e821",
      "__legacy_TintColorMode-ID": "fcef6c4f-d297-489a-99e9-9e68fbcc02f7",
      "__legacy_ColorDrive-ID": "4704beda-7d8d-469c-ba3e-9fd6fa6c9761",
      IsPressed: GenField(IData, false),
      IsHovering: GenField(IData, false),
      HoverVibrate: GenField(IData, "Short"),
      PressVibrate: GenField(IData, "Medium"),
      ClearFocusOnPress: GenField(IData, true),
      PassThroughHorizontalMovement: GenField(IData, true),
      PassThroughVerticalMovement: GenField(IData, true),
      RequireLockInToPress: GenField(IData, false),
      RequireInitialPress: GenField(IData, true),
      PressPoint: GenField(IData, [0, 0]),
      Pressed: GenField(IData, { Target: null }),
      Pressing: GenField(IData, { Target: null }),
      Released: GenField(IData, { Target: null }),
      HoverEnter: GenField(IData, { Target: null }),
      HoverStay: GenField(IData, { Target: null }),
      HoverLeave: GenField(IData, { Target: null }),
    });
  }
}

module.exports = Button;
