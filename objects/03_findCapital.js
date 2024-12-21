const capitalOf = { India: "New Delhi", UnitedState: "Washington, D.C.", France: "Paris", Japan: "Tokyo", Brazil: "Brasília", Australia: "Canberra", German: "Berlin", Canada: "Ottawa", Italy: "Rome", SouthKorea: "Seoul" };

const getCapitalof = function (country) {
  return capitalOf[country];
};

console.log(getCapitalof("India"));
console.log(getCapitalof("UnitedState"));
console.log(getCapitalof("France"));
console.log(getCapitalof("Japan"));
console.log(getCapitalof("Brazil"));
console.log(getCapitalof("Australia"));
console.log(getCapitalof("German"));
console.log(getCapitalof("Canada"));
console.log(getCapitalof("Italy"));
console.log(getCapitalof("SouthKorea"));