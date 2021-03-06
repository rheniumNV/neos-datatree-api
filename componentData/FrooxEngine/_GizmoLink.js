const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  _worker: {
    ID: "0b224877-9d94-42ed-90f3-91f8101d29bc",
    Data: "0340f536-3f92-4e5b-abd5-c3be952cbc89",
  },
  _gizmo: {
    ID: "1a7d5354-91f6-433b-b041-57fc12b4cfe6",
    Data: null,
  },
  _type: {
    ID: "5aacc095-92d0-4181-a5a7-732111e2013f",
    Data: "FrooxEngine.SlotGizmo",
  },
};

class GizmoLink extends IComponent {
  constructor() {
    super("FrooxEngine.GizmoLink", {
      _worker: GenField(IData, "0340f536-3f92-4e5b-abd5-c3be952cbc89"),
      _gizmo: GenField(IData, null),
      _type: GenField(IData, "FrooxEngine.SlotGizmo"),
    });
  }
}

module.exports = GizmoLink;
