// const rotate = (array) => {
//   const popped = array.pop();
//   return array.unshift(popped);
// };

const convert = (datas) => {
  const keys = Object.keys(datas[0]);
  const values = datas.map((data) => Object.values(data));
  const rows = [];
  rows.push(keys.join(","));
  values.forEach((value) => {
    rows.push(value.join(","));
  });
  const csvData = rows.join("\n");
  Deno.writeTextFile("file.csv", csvData);
};

const display = (datas) => {
  convert(JSON.parse(datas));
};

const read = () => {
  const data = Deno.readTextFile("./file.json");
  data.then(display);
};

read();
