const {
  IComponent,
  GenField,
  BoolData,
  NumberData,
  TargetData,
  EnumData,
  RefData,
  DummyRef,
  ListData,
} = require("../../../core");

class Grabbable extends IComponent {
  constructor(params = {}) {
    super("FrooxEngine.Grabbable", {
      ReparentOnRelease: GenField(BoolData, true),
      PreserveUserSpace: GenField(BoolData, true),
      DestroyOnRelease: GenField(BoolData, true),
      GrabPriority: GenField(NumberData),
      GrabPriorityWhenGrabbed: GenField(RefData),
      CustomCanGrabCheck: GenField(TargetData),
      EditModeOnly: GenField(BoolData),
      AllowSteal: GenField(BoolData),
      DropOnDisable: GenField(BoolData, true),
      ActiveUserFilter: GenField(EnumData, "Disabled"),
      OnlyUsers: GenField(ListData),
      Scalable: GenField(BoolData, true),
      Receivable: GenField(BoolData, true),
      AllowOnlyPhysicalGrab: GenField(BoolData),
      _grabber: GenField(RefData),
      _lastParent: GenField(RefData),
      _lastParentIsUserSpace: GenField(BoolData, true),
      "__legacyActiveUserRootOnly-ID": GenField(RefData, new DummyRef()),
      ...params,
    });
  }
}

module.exports = Grabbable;
