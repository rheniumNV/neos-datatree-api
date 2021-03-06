const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  ReparentOnRelease: {
    ID: "d0b11e61-d51a-4240-befb-ed8c56e57d8c",
    Data: true,
  },
  PreserveUserSpace: {
    ID: "64c79fd6-5235-459d-9b39-ee289714368c",
    Data: true,
  },
  DestroyOnRelease: {
    ID: "fd685c7d-b782-4915-bb82-e2352f088156",
    Data: false,
  },
  GrabPriority: {
    ID: "e2ab531a-6108-4742-a3c3-e49944639857",
    Data: 0,
  },
  GrabPriorityWhenGrabbed: {
    ID: "31587307-032b-4a34-838e-919f249aa0f9",
    Data: null,
  },
  CustomCanGrabCheck: {
    ID: "028971e0-8db7-4282-a1a7-48099d8635de",
    Data: {
      Target: null,
    },
  },
  EditModeOnly: {
    ID: "d455c41d-a857-4eb8-904f-6bcb3acb805f",
    Data: false,
  },
  AllowSteal: {
    ID: "9c7754a3-fdf5-4853-bba3-dca88212adea",
    Data: false,
  },
  DropOnDisable: {
    ID: "d8e34dea-95aa-4dfa-b3a0-2163ea8d2d79",
    Data: true,
  },
  ActiveUserFilter: {
    ID: "502992ad-5683-4a8b-9b65-378d2fb0136b",
    Data: "Disabled",
  },
  OnlyUsers: {
    ID: "bfe95e0d-4126-405b-b30e-682a4e88f851",
    Data: [],
  },
  Scalable: {
    ID: "29a75a67-94c9-4f82-926a-28321310b48a",
    Data: true,
  },
  Receivable: {
    ID: "e4b558f9-213a-480e-bb51-10d0ccfb73a3",
    Data: true,
  },
  AllowOnlyPhysicalGrab: {
    ID: "279ca30f-5607-4a6c-bdda-b08b5e781c1e",
    Data: false,
  },
  _grabber: {
    ID: "05121192-052a-4b4f-8390-c4fa1a4c87b3",
    Data: null,
  },
  _lastParent: {
    ID: "65b4e9b7-0c53-4237-8233-df80b5218417",
    Data: null,
  },
  _lastParentIsUserSpace: {
    ID: "6c7b2260-9cb2-4498-ba97-d56739866f1a",
    Data: true,
  },
  "__legacyActiveUserRootOnly-ID": "c2860be7-5446-4d0b-9cae-8353dcc4ced3",
};

class Grabbable extends IComponent {
  constructor() {
    super("FrooxEngine.Grabbable", {
      ReparentOnRelease: GenField(IData, true),
      PreserveUserSpace: GenField(IData, true),
      DestroyOnRelease: GenField(IData, false),
      GrabPriority: GenField(IData, 0),
      GrabPriorityWhenGrabbed: GenField(IData, null),
      CustomCanGrabCheck: GenField(IData, { Target: null }),
      EditModeOnly: GenField(IData, false),
      AllowSteal: GenField(IData, false),
      DropOnDisable: GenField(IData, true),
      ActiveUserFilter: GenField(IData, "Disabled"),
      OnlyUsers: GenField(IData, []),
      Scalable: GenField(IData, true),
      Receivable: GenField(IData, true),
      AllowOnlyPhysicalGrab: GenField(IData, false),
      _grabber: GenField(IData, null),
      _lastParent: GenField(IData, null),
      _lastParentIsUserSpace: GenField(IData, true),
      "__legacyActiveUserRootOnly-ID": "c2860be7-5446-4d0b-9cae-8353dcc4ced3",
    });
  }
}

module.exports = Grabbable;
