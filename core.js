const uuid = require("uuid").v4;
const util = require("lodash");

const execToDataTree = (target) =>
  !!target && typeof target.toDataTree == "function"
    ? target.toDataTree()
    : target;

const execGetRef = (target) =>
  !!target && typeof target.getRef == "function" ? target.getRef() : target;

class IData {
  constructor(data = 0) {
    this.Data = data;
  }
  toDataTree() {
    return execToDataTree(this.Data);
  }
  set(data) {
    this.Data = data;
  }
  get() {
    return this.Data;
  }
  getRef() {
    throw new Error("Type Error");
  }
}

class BoolData extends IData {
  constructor(data = false) {
    super(data);
  }
}

class NumberData extends IData {
  constructor(data = 0) {
    super(data);
  }
}

class Vec2Data extends IData {
  constructor(data = [0, 0]) {
    super(data);
  }
}

class Vec3Data extends IData {
  constructor(data = [0, 0, 0]) {
    super(data);
  }
}
class QuaternionData extends IData {
  constructor(data = [0, 0, 0, 0]) {
    super(data);
  }
}
class ColorData extends IData {
  constructor(data = [0, 0, 0, 0]) {
    super(data);
  }
}
class StringData extends IData {
  constructor(data = "") {
    super(data);
  }
}

class URIData extends IData {
  constructor(data = "") {
    super(data);
  }
}

class IDData extends IData {
  constructor(data = uuid()) {
    super(data);
  }
}

class RefData extends IData {
  constructor(data = null) {
    super(data);
  }
  toDataTree() {
    return execGetRef(this.Data);
  }
}

class TargetData extends IData {
  constructor(data = new RefData()) {
    super(data);
  }
  toDataTree() {
    return { Target: execToDataTree(this.Data) };
  }
}

class ListData extends IData {
  constructor(data = []) {
    super(data);
  }
  toDataTree() {
    return util.map(this.Data, (ele) => execToDataTree(ele));
  }
  addElement(element) {
    this.Data = util.concat(this.Data, element);
  }
}

class EnumData extends IData {
  constructor(data = "") {
    super(data);
  }
}

class DataMap extends IData {
  constructor(data = {}) {
    super(data);
  }
  toDataTree() {
    return util.reduce(
      this.Data,
      (prev, current, key) => ({
        ...prev,
        ...{ [key]: execToDataTree(current) },
      }),
      {}
    );
  }
}

class IRef extends IData {
  constructor(data = null) {
    super(data);
    this.ID = new IDData();
  }
  toDataTree() {
    throw new Error("Type Error Asset");
  }
  getRef() {
    return execToDataTree(this.ID);
  }
}

class DummyRef extends IRef {
  constructor() {
    super("dummy");
  }
}

class IField extends IRef {
  constructor(data = new IData()) {
    super();
    this.ID = uuid();
    this.Data = data;
  }
  toDataTree() {
    return { ID: this.ID, Data: execToDataTree(this.Data) };
  }
}

const GenField = (dataType, ...args) => new IField(new dataType(...args));

class Slot extends IRef {
  constructor(name = "Empty", parent = null) {
    super();
    this.Params = {
      ID: new IDData(),

      Components: GenField(ListData),

      Name: GenField(StringData, name),
      Tag: GenField(StringData),
      Active: GenField(BoolData, true),
      "Persistent-ID": new IDData(),

      Position: GenField(Vec3Data),
      Rotation: GenField(Vec3Data),
      Scale: GenField(Vec3Data),

      OrderOffset: GenField(NumberData),
      ParentReference: new RefData(parent),
      Children: new ListData(),
    };
  }
  toDataTree() {
    return util.reduce(
      this.Params,
      (prev, current, key) => ({
        ...prev,
        ...{ [key]: execToDataTree(current) },
      }),
      {}
    );
  }
}

class IComponent extends IRef {
  constructor(typeName, extraParams = {}) {
    super();
    this.Params = {
      Type: typeName,
      Data: new DataMap({
        ID: new IDData(),
        "persistent-ID": new IDData(),
        UpdateOrder: GenField(NumberData),
        Enabled: GenField(BoolData, true),
        ...extraParams,
      }),
    };
  }
  toDataTree() {
    return util.reduce(
      this.Params,
      (prev, current, key) => ({
        ...prev,
        ...{ [key]: execToDataTree(current) },
      }),
      {}
    );
  }
}

module.exports = {
  IData,
  BoolData,
  StringData,
  URIData,
  NumberData,
  Vec2Data,
  Vec3Data,
  QuaternionData,
  ColorData,
  RefData,
  TargetData,
  ListData,
  EnumData,

  GenField,

  IRef,
  DummyRef,
  IField,
  Slot,
  IComponent,

  execToDataTree,
  execGetRef,
  util,
};
