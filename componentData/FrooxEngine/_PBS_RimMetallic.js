const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  HighPriorityIntegration: {
    ID: "501ed67b-3c9a-4611-ae17-90e15c694af7",
    Data: false,
  },
  TextureScale: {
    ID: "6eef9790-a5b9-4f94-8316-b81551773875",
    Data: [1, 1],
  },
  TextureOffset: {
    ID: "5b124d78-db4f-48a0-98ee-4485d781611c",
    Data: [0, 0],
  },
  AlbedoColor: {
    ID: "e2299973-4f1f-43ab-a97a-f08e4f1f4f6f",
    Data: [1, 0.25, 0, 0.20000000298023224],
  },
  AlbedoTexture: {
    ID: "8667c045-df05-465d-9dbd-7c83712a86b0",
    Data: null,
  },
  EmissiveColor: {
    ID: "4f8f6136-a165-49e7-b513-f264fa9db138",
    Data: [0, 0, 0, 1],
  },
  EmissiveMap: {
    ID: "7f4de83b-7e49-4134-bfc3-9d00c1163148",
    Data: null,
  },
  NormalMap: {
    ID: "db81007e-c70b-41e5-8288-bd29d3dcd2aa",
    Data: null,
  },
  NormalScale: {
    ID: "f55d4f32-869a-40b2-ae11-91d13933e921",
    Data: 1,
  },
  OcclusionMap: {
    ID: "7d3f2654-f8aa-40c5-8fce-6150545377e0",
    Data: null,
  },
  RimColor: {
    ID: "4179c49e-e01f-4cfa-a4d5-4c1752483456",
    Data: [1, 0.25, 0, 1],
  },
  RimPower: {
    ID: "9a561587-3c28-4b8c-a63e-6a9b41ebb2b9",
    Data: 0.699999988079071,
  },
  Transparent: {
    ID: "b2f97d80-baed-4403-b503-f47f9317d2ec",
    Data: true,
  },
  ForceZWrite: {
    ID: "d9ab17f3-fd08-4caf-916c-9a75505c9356",
    Data: true,
  },
  OffsetFactor: {
    ID: "96657170-bcbf-41ab-b7ed-d922299016d2",
    Data: 1,
  },
  OffsetUnits: {
    ID: "6e4eb727-c239-46f2-be80-1c288c8ef7c5",
    Data: 1,
  },
  RenderQueue: {
    ID: "822d772c-ede2-4c4c-b0cd-d458689c848f",
    Data: -1,
  },
  Metallic: {
    ID: "193f8fbe-6543-4bba-8c51-792421de0205",
    Data: 0.5,
  },
  Smoothness: {
    ID: "036500e4-2d2a-47f7-a146-7450c1e7c83c",
    Data: 0.10000000149011612,
  },
  MetallicMap: {
    ID: "3cce30d8-2b56-4289-8258-e038b9742744",
    Data: null,
  },
  "_regular-ID": "d8552f51-b58a-4694-b0cf-06a16d76463a",
  "_transparent-ID": "c9551570-7d4b-41b1-904e-fd5fb19eb5c9",
  "_zwrite-ID": "3cd9e93b-d61c-4a07-8dd2-c63ad289ed18",
};

class PBS_RimMetallic extends IComponent {
  constructor() {
    super("FrooxEngine.PBS_RimMetallic", {
      HighPriorityIntegration: GenField(IData, false),
      TextureScale: GenField(IData, [1, 1]),
      TextureOffset: GenField(IData, [0, 0]),
      AlbedoColor: GenField(IData, [1, 0.25, 0, 0.20000000298023224]),
      AlbedoTexture: GenField(IData, null),
      EmissiveColor: GenField(IData, [0, 0, 0, 1]),
      EmissiveMap: GenField(IData, null),
      NormalMap: GenField(IData, null),
      NormalScale: GenField(IData, 1),
      OcclusionMap: GenField(IData, null),
      RimColor: GenField(IData, [1, 0.25, 0, 1]),
      RimPower: GenField(IData, 0.699999988079071),
      Transparent: GenField(IData, true),
      ForceZWrite: GenField(IData, true),
      OffsetFactor: GenField(IData, 1),
      OffsetUnits: GenField(IData, 1),
      RenderQueue: GenField(IData, -1),
      Metallic: GenField(IData, 0.5),
      Smoothness: GenField(IData, 0.10000000149011612),
      MetallicMap: GenField(IData, null),
      "_regular-ID": "d8552f51-b58a-4694-b0cf-06a16d76463a",
      "_transparent-ID": "c9551570-7d4b-41b1-904e-fd5fb19eb5c9",
      "_zwrite-ID": "3cd9e93b-d61c-4a07-8dd2-c63ad289ed18",
    });
  }
}

module.exports = PBS_RimMetallic;
