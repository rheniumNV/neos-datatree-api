const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  HighPriorityIntegration: {
    ID: "e85f4a86-c452-4626-982b-32a1c0fba835",
    Data: false,
  },
  OverrideBoundingBox: {
    ID: "a7b4f810-48f6-46e4-8cf5-86d902ebe573",
    Data: false,
  },
  OverridenBoundingBox: {
    ID: "507598f1-7735-4a8c-9da7-41a46f910bc4",
    Data: {
      Min: [0, 0, 0],
      Max: [0, 0, 0],
    },
  },
  Font: {
    ID: "7c3ec28c-8ed9-492b-876e-70bbad4da960",
    Data: "e323d458-2bcc-49a1-a301-e7cda56a703f",
  },
  Text: {
    ID: "c9a287ae-557d-456b-83d1-47b1c88b70cd",
    Data: "Button",
  },
  ParseRichText: {
    ID: "ff65eca7-6137-4063-89a1-ef58ac0950c4",
    Data: true,
  },
  NullText: {
    ID: "7ff75220-17c4-4556-9322-df2247526965",
    Data: null,
  },
  Size: {
    ID: "4f843735-5423-4bf8-b163-015835da7614",
    Data: 1,
  },
  HorizontalAlign: {
    ID: "d489f977-268d-4b53-aef1-6cd2c8d6b545",
    Data: "Center",
  },
  VerticalAlign: {
    ID: "cc07f758-40af-4449-879b-8ee579cc5755",
    Data: "Middle",
  },
  AlignmentMode: {
    ID: "c21ae4a9-8129-41af-a89d-4beff6c1c845",
    Data: "Geometric",
  },
  Color: {
    ID: "ef0d1271-d247-48c9-9bd8-a4f8723cdacf",
    Data: [1, 1, 1, 1],
  },
  Materials: {
    ID: "e886be81-d22f-46a9-a055-5b21c4a87e4a",
    Data: [
      {
        ID: "94a169ca-560d-499c-89cd-c6f6f4fc9a0a",
        Data: "8923559f-afe5-450e-afb5-82df34db1497",
      },
    ],
  },
  LineHeight: {
    ID: "8b7b43dd-5a30-4aae-b943-6c844ea1683e",
    Data: 0.800000011920929,
  },
  Bounded: {
    ID: "12b53b3c-6bb0-4450-98df-3d117e8ccb95",
    Data: true,
  },
  BoundsSize: {
    ID: "1651ce44-d1ef-4e37-a4f3-36ffda0b85b5",
    Data: [0.2027207911014557, 0.04000000283122063],
  },
  BoundsAlignment: {
    ID: "dca006a4-7639-4dc6-9f98-fdd7396c5e76",
    Data: "MiddleCenter",
  },
  MaskPattern: {
    ID: "568025c8-de7d-48a3-b0a7-6d4d333dd8ec",
    Data: null,
  },
  HorizontalAutoSize: {
    ID: "5ce2b90b-6f54-464d-b8e6-1e8ed66654bb",
    Data: true,
  },
  VerticalAutoSize: {
    ID: "28069202-4523-47b9-b657-c870ccd9631d",
    Data: true,
  },
  CaretPosition: {
    ID: "11544994-521e-44f0-83a9-a37c33979ace",
    Data: -1,
  },
  SelectionStart: {
    ID: "e7d64069-f307-4ee5-b078-762b6fbdef63",
    Data: -1,
  },
  CaretColor: {
    ID: "9b484e4e-b388-462f-9110-0cff4b2a019e",
    Data: [0, 0, 0, 0],
  },
  SelectionColor: {
    ID: "6bf5167b-c5c5-4300-a13e-2d924fcc613f",
    Data: [0, 0, 0, 0],
  },
  "_legacyFontMaterial-ID": "a4e88aff-885e-49d7-b5d5-86425e982ce5",
  "_legacyAlign-ID": "cf8b94b4-f263-4fee-8c71-3531d2d4c0cf",
};

class TextRenderer extends IComponent {
  constructor() {
    super("FrooxEngine.TextRenderer", {
      HighPriorityIntegration: GenField(IData, false),
      OverrideBoundingBox: GenField(IData, false),
      OverridenBoundingBox: GenField(IData, { Min: [0, 0, 0], Max: [0, 0, 0] }),
      Font: GenField(IData, "e323d458-2bcc-49a1-a301-e7cda56a703f"),
      Text: GenField(IData, "Button"),
      ParseRichText: GenField(IData, true),
      NullText: GenField(IData, null),
      Size: GenField(IData, 1),
      HorizontalAlign: GenField(IData, "Center"),
      VerticalAlign: GenField(IData, "Middle"),
      AlignmentMode: GenField(IData, "Geometric"),
      Color: GenField(IData, [1, 1, 1, 1]),
      Materials: GenField(IData, [
        {
          ID: "94a169ca-560d-499c-89cd-c6f6f4fc9a0a",
          Data: "8923559f-afe5-450e-afb5-82df34db1497",
        },
      ]),
      LineHeight: GenField(IData, 0.800000011920929),
      Bounded: GenField(IData, true),
      BoundsSize: GenField(IData, [0.2027207911014557, 0.04000000283122063]),
      BoundsAlignment: GenField(IData, "MiddleCenter"),
      MaskPattern: GenField(IData, null),
      HorizontalAutoSize: GenField(IData, true),
      VerticalAutoSize: GenField(IData, true),
      CaretPosition: GenField(IData, -1),
      SelectionStart: GenField(IData, -1),
      CaretColor: GenField(IData, [0, 0, 0, 0]),
      SelectionColor: GenField(IData, [0, 0, 0, 0]),
      "_legacyFontMaterial-ID": "a4e88aff-885e-49d7-b5d5-86425e982ce5",
      "_legacyAlign-ID": "cf8b94b4-f263-4fee-8c71-3531d2d4c0cf",
    });
  }
}

module.exports = TextRenderer;
