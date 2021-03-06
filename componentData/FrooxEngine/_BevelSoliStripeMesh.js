const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  HighPriorityIntegration: {
    ID: "8678b4d3-c22e-4a94-ae3f-f16af700323d",
    Data: false,
  },
  OverrideBoundingBox: {
    ID: "b59979a4-fd49-46ec-83f9-e28396d90453",
    Data: false,
  },
  OverridenBoundingBox: {
    ID: "ead9b036-ec32-47df-ab03-061ce986bbe3",
    Data: {
      Min: [0, 0, 0],
      Max: [0, 0, 0],
    },
  },
  Width: {
    ID: "241a08d3-5ebf-4f54-b8d5-bb1603dcbeff",
    Data: 0.24500000476837158,
  },
  Height: {
    ID: "9cc3a4ce-15b5-40f7-8a50-7a46bdbf8985",
    Data: 0.04500000178813934,
  },
  Thickness: {
    ID: "c0f72e13-fcf3-42eb-9bc6-b1c949ef3463",
    Data: 0.004999999888241291,
  },
  SlantLeft: {
    ID: "7ab69329-9483-4d60-8576-8f48ec16b54c",
    Data: 22.5,
  },
  SlantRight: {
    ID: "65a0c256-d379-424e-bbd6-05b5d1b848a9",
    Data: 22.5,
  },
  Relief: {
    ID: "790f3c34-00a2-41e3-a499-20947b5c6916",
    Data: false,
  },
};

class BevelSoliStripeMesh extends IComponent {
  constructor() {
    super("FrooxEngine.BevelSoliStripeMesh", {
      HighPriorityIntegration: GenField(IData, false),
      OverrideBoundingBox: GenField(IData, false),
      OverridenBoundingBox: GenField(IData, { Min: [0, 0, 0], Max: [0, 0, 0] }),
      Width: GenField(IData, 0.24500000476837158),
      Height: GenField(IData, 0.04500000178813934),
      Thickness: GenField(IData, 0.004999999888241291),
      SlantLeft: GenField(IData, 22.5),
      SlantRight: GenField(IData, 22.5),
      Relief: GenField(IData, false),
    });
  }
}

module.exports = BevelSoliStripeMesh;
