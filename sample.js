const NDT = require("./index");
const { Slot } = NDT;
const Grabbable = require("./components/transform/interaction/grabbable");
const ObjectRoot = require("./components/transform/objectRoot");

const root = new Slot("Sample Object");
NDT.AddComponent(root, new Grabbable());
NDT.AddComponent(root, new ObjectRoot());

const item = NDT.PackItem(root);

console.log(item);
