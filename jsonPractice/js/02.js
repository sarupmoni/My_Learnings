import data from "../json/02.json" with {type: "json"};

const modifiedData = {...data};
// modifiedData["hobbies"] = ["Reading", "Gaming", "Cooking"];
const string = JSON.stringify(modifiedData.skills);
console.log(`${data.name} loves ${string}`);
