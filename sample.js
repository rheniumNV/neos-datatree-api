const NDT = require("./index");
const { Slot } = NDT;
const Grabbable = require("./componentData/_FrooxEngine.Grabbable");
const ObjectRoot = require("./componentData/_FrooxEngine.ObjectRoot");

const fs = require("fs");
const { DummyRef } = require("./core");

const root = new Slot("Sample Object");
NDT.AddComponent(root, new ObjectRoot());
NDT.AddComponent(root, new Grabbable());
const item = NDT.PackItem(root);

console.log(item);
const output = JSON.stringify(item, null, "  ");
fs.writeFileSync("./sample.json", output, "binary");
