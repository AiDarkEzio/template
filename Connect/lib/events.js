

const fs = require("fs");
const path = require("path");
var Commands = [];
const config = require("./config");
// var json = JSON.parse(fs.readFileSync("./Connect/database/json/language/EN.json"));
const getString = (file) => { 
  if (fs.existsSync('./Connect/database/json/language/' + config.setting.langCode + '.json')) {
    var json = JSON.parse(fs.readFileSync('./Connect/database/json/language/' + config.setting.langCode + '.json'));
    return json['STRINGS'][file];
  } else {
    var json = JSON.parse(fs.readFileSync('./Connect/database/json/language/EN.json'));
    return json['STRINGS'][file];
  }
};
const reactArry = async (text = "INFO" || "SUCCESS" || "ERROR") => {
  const reactArry = getString("react");
  const react = reactArry[text];
  return (react[Math.floor(Math.random() * react.length)])
};
const successfullMessage = (msg) => { return "👩‍🦰 *Successful*:-  ```" + msg + "```"; };
const errorMessage = (msg) => { return "🚀 *Error*:-  ```" + msg + "```"; };
const infoMessage = (msg) => { return "🤖 *Info*:- ```" + msg + "```"; };
const categories = ["search", "all", "downloade", "chat", "system", 'fun', '18+', 'owner', 'create', 'group', "logo" ];
function addCommand(info, func) {
  var types = ["photo", "image", "text", "message"];
  var infos = {
    category: info["category"] === null || undefined ? ["all"] : info["category"],
    fromMe: info["fromMe"] === undefined ? true : info["fromMe"],
    onlyGroup: info["onlyGroup"] === undefined ? false : info["onlyGroup"],
    onlyPinned: info["onlyPinned"] === undefined ? false : info["onlyPinned"],
    React: info["React"] === undefined ? "💖" : info["React"],
    onlyPm: info["onlyPm"] === undefined ? false : info["onlyPm"],
    deleteCommand: info["deleteCommand"] === undefined ? true : info["deleteCommand"],
    desc: info["desc"] === undefined ? "" : info["desc"],
    usage: info["usage"] === undefined ? "" : info["usage"],
    dontAddCommandList: info["dontAddCommandList"] === undefined ? false : info["dontAddCommandList"],
    warn: info["warn"] === undefined ? "" : info["warn"],
    function: func,
  };
  if (info["on"] === undefined && info["pattern"] === undefined) { infos.on = "message"; infos.fromMe = false;} 
  else if (info["on"] !== undefined && types.includes(info["on"])) { infos.on = info["on"]; if (info["pattern"] !== undefined) infos.pattern = info["pattern"] === undefined ? [] : info["pattern"];} 
  else infos.pattern = info["pattern"] === undefined ? [] : info["pattern"];
  Commands.push(infos);
  return infos;
}
module.exports = { addCommand, getString, reactArry, successfullMessage, infoMessage, errorMessage, categories, config, commands: Commands,};
