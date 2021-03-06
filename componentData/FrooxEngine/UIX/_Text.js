const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Font: {
    ID: "6ff09ffa-ba5c-40bc-9617-d79a38c05ee3",
    Data: "e323d458-2bcc-49a1-a301-e7cda56a703f",
  },
  Content: {
    ID: "e0592efa-5be3-422c-beaa-d0d22728fe6b",
    Data: null,
  },
  ParseRichText: {
    ID: "ae409a5e-485c-497c-9ac9-75e8e2645341",
    Data: true,
  },
  NullContent: {
    ID: "15e4bc58-6fc6-4043-99fa-a4d28cd03640",
    Data: null,
  },
  Size: {
    ID: "6a763c94-061d-4af7-a6ed-41ca448af8f6",
    Data: 64,
  },
  HorizontalAlign: {
    ID: "1be2755b-3b54-4fe6-b0dc-c021da38ce80",
    Data: "Left",
  },
  VerticalAlign: {
    ID: "5a232762-ed6d-45d4-8e41-4b5aa6359cb5",
    Data: "Top",
  },
  AlignmentMode: {
    ID: "c067a487-30bf-4694-a98d-0d5092380a83",
    Data: "Geometric",
  },
  Color: {
    ID: "586701be-a789-4d6f-a997-54d810415c9d",
    Data: [0, 0, 0, 1],
  },
  Materials: {
    ID: "5ae49324-ae6b-46e3-a7f8-1a4deeb46ca9",
    Data: [
      {
        ID: "133ced17-a76a-486a-b4c4-68ad0738b7fa",
        Data: "13c2adf9-915b-4360-93bd-b4ec41ec7805",
      },
    ],
  },
  LineHeight: {
    ID: "fc78427b-3261-44fd-b377-61c06e3dc1b1",
    Data: 0.800000011920929,
  },
  MaskPattern: {
    ID: "1177b430-3b49-4f7c-a08e-6fd5dccf3190",
    Data: null,
  },
  HorizontalAutoSize: {
    ID: "6153ff3d-9f15-40e3-84bb-a5d6b671cc47",
    Data: false,
  },
  VerticalAutoSize: {
    ID: "9d41539f-2def-48fe-8f30-3866ce2bb49f",
    Data: false,
  },
  AutoSizeMin: {
    ID: "573ef3f5-3825-4c61-b545-dcfa71c652b8",
    Data: 8,
  },
  AutoSizeMax: {
    ID: "479c1e79-8291-4f54-90ba-bfb8bad26b15",
    Data: 64,
  },
  CaretPosition: {
    ID: "533c0275-c927-4cc2-80a3-151f878bbcfd",
    Data: -1,
  },
  SelectionStart: {
    ID: "df0c79e0-1f80-48e4-a83a-b6b20f30b4a2",
    Data: -1,
  },
  CaretColor: {
    ID: "2e9ac72b-8175-4992-a4b0-d8d06c326b3f",
    Data: [0, 0, 0, 0],
  },
  SelectionColor: {
    ID: "ec739e75-2ad8-4bd3-b745-61a872f8d11b",
    Data: [0, 0, 0, 0],
  },
  InteractionTarget: {
    ID: "dc7fe3cb-08e6-4cff-8461-b7c05113af61",
    Data: true,
  },
  "_legacyFontMaterial-ID": "0ca174c8-8dcd-4520-af1e-a5253e753196",
  "_legacyAlign-ID": "6ec29e33-253c-485f-9d6e-97ac038f222c",
};

class Text extends IComponent {
  constructor() {
    super("FrooxEngine.UIX.Text", {
      Font: GenField(IData, "e323d458-2bcc-49a1-a301-e7cda56a703f"),
      Content: GenField(IData, null),
      ParseRichText: GenField(IData, true),
      NullContent: GenField(IData, null),
      Size: GenField(IData, 64),
      HorizontalAlign: GenField(IData, "Left"),
      VerticalAlign: GenField(IData, "Top"),
      AlignmentMode: GenField(IData, "Geometric"),
      Color: GenField(IData, [0, 0, 0, 1]),
      Materials: GenField(IData, [
        {
          ID: "133ced17-a76a-486a-b4c4-68ad0738b7fa",
          Data: "13c2adf9-915b-4360-93bd-b4ec41ec7805",
        },
      ]),
      LineHeight: GenField(IData, 0.800000011920929),
      MaskPattern: GenField(IData, null),
      HorizontalAutoSize: GenField(IData, false),
      VerticalAutoSize: GenField(IData, false),
      AutoSizeMin: GenField(IData, 8),
      AutoSizeMax: GenField(IData, 64),
      CaretPosition: GenField(IData, -1),
      SelectionStart: GenField(IData, -1),
      CaretColor: GenField(IData, [0, 0, 0, 0]),
      SelectionColor: GenField(IData, [0, 0, 0, 0]),
      InteractionTarget: GenField(IData, true),
      "_legacyFontMaterial-ID": "0ca174c8-8dcd-4520-af1e-a5253e753196",
      "_legacyAlign-ID": "6ec29e33-253c-485f-9d6e-97ac038f222c",
    });
  }
}

module.exports = Text;
