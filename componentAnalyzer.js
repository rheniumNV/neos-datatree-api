const fs = require("fs");
const _ = require("lodash");
const { format, inspect } = require("util");

defaultParamsName = ["ID", "UpdateOrder", "Enabled", "persistent-ID"];
const analyze = (component) => ({
  Type: component.Type,
  Data: _.reduce(
    _.reject(
      _.map(component.Data, (ele, key) => ({ [key]: ele })),
      (ele) => _.includes(defaultParamsName, _.keys(ele)[0])
    ),
    (prev, ele) => ({
      ...prev,
      ...ele,
    }),
    {}
  ),
});

const itemData = JSON.parse(fs.readFileSync("./sample.json", "utf8"));
const cFormat = fs.readFileSync("./componentFormat.txt", "utf8");

const getSlotList = (slot) => [
  slot,
  ..._.flatten(_.map(slot.Children, (child) => getSlotList(child))),
];
const childrenSlotList = getSlotList(itemData.Object);
const componentList = _.flatten(
  _.map(childrenSlotList, (ele) => ele.Components.Data)
);

const result = _.map(componentList, analyze);

const rejectId = (idata) =>
  _.has(idata, "Data") && _.has(idata, "ID")
    ? format("GenField(IData, %s)", inspect(idata.Data))
    : format('"%s"', idata);

_.forEach(result, (ele) => {
  const ty = _.map(ele.Data, (current, key) =>
    format('"%s" : %s,', key, rejectId(current))
  );
  const name = _.replace(ele.Type, "FrooxEngine.", "");
  const text = format(
    cFormat,
    JSON.stringify(ele.Data, null, "  "),
    name,
    ele.Type,
    _.join(ty, "\n"),
    name
  );
  fs.writeFileSync("./componentData/_" + ele.Type + ".js", text);
});

console.log(
  result.length,
  _.map(result, (ele) => ele.Type)
);
