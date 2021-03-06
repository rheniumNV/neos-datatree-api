const { execToDataTree, util } = require("./core");

const AddComponent = (slot, component) => {
  slot.Params.Components.get().addElement(component);
  return slot;
};

//todo loop check
const SetParent = (slot1, slot2) => {
  slot2.Params.Children.addElement(slot1);
  slot1.Params.ParentReference.set(slot2);
  return slot1;
};

const GetChildren = (slot) => slot.Params.Children;

const GetChild = (slot, index) =>
  util.get(GetChildren(slot), "[" + index + "]", null);

const PackItem = (rootSlot, assets = []) => ({
  Object: execToDataTree(rootSlot),
  Assets: assets,
  TypeVersions: {},
});

module.exports = { AddComponent, SetParent, GetChildren, GetChild, PackItem };
