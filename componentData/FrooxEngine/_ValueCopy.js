const dir = require("app-root-path");
const { IComponent, GenField, IData } = require(dir + "/core");

const origin = {
  Source: {
    ID: "2eeebe95-955a-44f2-b6ba-8999fa80c8c1",
    Data: "99e540f2-b9c5-4b37-8c20-5f58fce83707",
  },
  Target: {
    ID: "a51310d9-21c9-44d6-b215-b4ccfbe85ca0",
    Data: "06250eb5-d4b9-468c-8c34-9b6ac07da7e8",
  },
  WriteBack: {
    ID: "f67dc9f3-6485-4849-9267-2276200d7048",
    Data: false,
  },
};

class ValueCopy extends IComponent {
  constructor() {
    super(
      "FrooxEngine.ValueCopy`1[[BaseX.float3, BaseX, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]",
      {
        Source: GenField(IData, "99e540f2-b9c5-4b37-8c20-5f58fce83707"),
        Target: GenField(IData, "06250eb5-d4b9-468c-8c34-9b6ac07da7e8"),
        WriteBack: GenField(IData, false),
      }
    );
  }
}

module.exports = ValueCopy;
