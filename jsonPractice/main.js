import person1 from "./data.json" with {type: "json"};

const main = () => {
  const { name} = person1;
  const personData1 = { name: name };

  console.log(JSON.stringify(personData1));

};

main();
