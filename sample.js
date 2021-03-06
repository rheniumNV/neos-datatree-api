const NDT = require("./index");
const { Slot } = NDT;
const Grabbable = require("./componentData/FrooxEngine/_Grabbable");
const ObjectRoot = require("./componentData/FrooxEngine/_ObjectRoot");
const BoxCollider = require("./componentData/FrooxEngine/_BoxCollider");
const BoxMesh = require("./componentData/FrooxEngine/_BoxMesh");
const MeshRenderer = require("./componentData/FrooxEngine/_MeshRenderer");

const fs = require("fs");

const root = new Slot("Sample Object");
NDT.AddComponent(root, new ObjectRoot());
NDT.AddComponent(root, new Grabbable());
NDT.AddComponent(root, new BoxCollider());
const boxMesh = new BoxMesh();
const meshRenderer = new MeshRenderer();
meshRenderer.setParam("Mesh", boxMesh.getRef());
NDT.AddComponent(root, boxMesh);
NDT.AddComponent(root, meshRenderer);
const item = NDT.PackItem(root);

console.log(item);
const output = JSON.stringify(item, null, "  ");
fs.writeFileSync("./sample.json", output, "binary");
