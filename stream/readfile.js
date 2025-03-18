import _ from "lodash";

const readfileMethod1 = async (filePath) => {
  const file = await Deno.open(filePath, { read: true });
  const reader = file.readable.getReader();
  const arrayBuffer = (await reader.read()).value;
  const decoder = new TextDecoder();

  // return text;
  // return arrayBuffer;

  const chunkArray = [];
  let start = 0;
  for (let index = 0; index < 10; index++) {
    const end = _.indexOf(arrayBuffer, 10, start);
    chunkArray.push(_.slice(arrayBuffer, start, end));
    start = end + 1;
  }

  const decoded = chunkArray.map((arr) => decoder.decode(new Uint8Array(arr)));
  console.log(decoded);
};

// while(arrayBuffer)

const readfileMethod2 = async (filePath) => {
  const file = await Deno.open(filePath, { read: true });
  const decoder = new TextDecoder();
  for await (const chunk of file.readable) {
    console.log(decoder.decode(chunk));
  }
};

const file1 = await readfileMethod1("readfile.js");
console.log(file1);

// readfileMethod2("readfile.js");

readfileMethod1("readfile.js");
