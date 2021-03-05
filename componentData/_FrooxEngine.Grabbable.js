const { IComponent, GenField, IData } = require("../core");

const origin = {
  "ReparentOnRelease": {
    "ID": "5f1e626f-92dd-40cf-997f-440c5825cc6a",
    "Data": true
  },
  "PreserveUserSpace": {
    "ID": "6b4a9691-9836-4f16-862e-0ba18ecfa38f",
    "Data": true
  },
  "DestroyOnRelease": {
    "ID": "9d381a10-a586-4367-8926-7795388ed941",
    "Data": true
  },
  "GrabPriority": {
    "ID": "43e91b61-9f0b-416c-bc62-2f0132d71077",
    "Data": 0
  },
  "GrabPriorityWhenGrabbed": {
    "ID": "a653d17e-d5d1-48e3-9b8f-ae9fc9f7cb49",
    "Data": null
  },
  "CustomCanGrabCheck": {
    "ID": "de898a1c-6887-4188-8310-a5f5b8d600a2",
    "Data": {
      "Target": null
    }
  },
  "EditModeOnly": {
    "ID": "ea5ba817-5612-4e04-b116-cdaca62c0590",
    "Data": false
  },
  "AllowSteal": {
    "ID": "7fae5597-7348-4cdb-9bed-ecdd3658d42f",
    "Data": false
  },
  "DropOnDisable": {
    "ID": "2a48a4dd-5ebd-44fd-856f-f419c04ae8a8",
    "Data": true
  },
  "ActiveUserFilter": {
    "ID": "1f90926a-e7b4-4d2a-87d3-f0d519a0816f",
    "Data": "Disabled"
  },
  "OnlyUsers": {
    "ID": "9ff1268b-9018-4b34-8c90-bf211943db24",
    "Data": []
  },
  "Scalable": {
    "ID": "54965238-cb41-46b2-8512-6a8a7ca4f764",
    "Data": true
  },
  "Receivable": {
    "ID": "cf9e0217-418b-4e6c-96ac-99b5bbc59958",
    "Data": true
  },
  "AllowOnlyPhysicalGrab": {
    "ID": "df809686-6dfb-4026-8fad-568ea21b474a",
    "Data": false
  },
  "_grabber": {
    "ID": "1cbdb003-bba7-4a36-b0ce-c42762a45a2a",
    "Data": null
  },
  "_lastParent": {
    "ID": "78d71840-e2b2-4f4b-99e5-523ae4d986f6",
    "Data": null
  },
  "_lastParentIsUserSpace": {
    "ID": "7c365c50-8780-41f7-a222-5f78f5dfc00f",
    "Data": true
  },
  "__legacyActiveUserRootOnly-ID": "413be940-5a3d-49d6-a09f-3a0e15849e03"
}

class Grabbable extends IComponent {
  constructor() {
    super("FrooxEngine.Grabbable", {"ReparentOnRelease" : GenField(IData, true),
"PreserveUserSpace" : GenField(IData, true),
"DestroyOnRelease" : GenField(IData, true),
"GrabPriority" : GenField(IData, 0),
"GrabPriorityWhenGrabbed" : GenField(IData, null),
"CustomCanGrabCheck" : GenField(IData, { Target: null }),
"EditModeOnly" : GenField(IData, false),
"AllowSteal" : GenField(IData, false),
"DropOnDisable" : GenField(IData, true),
"ActiveUserFilter" : GenField(IData, 'Disabled'),
"OnlyUsers" : GenField(IData, []),
"Scalable" : GenField(IData, true),
"Receivable" : GenField(IData, true),
"AllowOnlyPhysicalGrab" : GenField(IData, false),
"_grabber" : GenField(IData, null),
"_lastParent" : GenField(IData, null),
"_lastParentIsUserSpace" : GenField(IData, true),
"__legacyActiveUserRootOnly-ID" : "413be940-5a3d-49d6-a09f-3a0e15849e03",});
  }
}

module.exports = Grabbable;
