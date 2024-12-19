let PS1 = "Jarvis ";
const home = PS1;
let files = [];
let directories = [];

const getComment = function (comment) {
  const array = comment.split("/");
  array.pop();
  if (array[0] === undefined) {
    return comment;
  }
  return array.join("/");
}

const getFiles = function (arg) {
  const existingFiles = files.concat(directories).flat();
  const target = arg.toString();
  if (existingFiles.join("/").includes(target)) {
    PS1 = PS1 + "/" + target;
  } else {
    return "no such files or directories found";
  }
}

const cd = function (arg) {
  if (arg.length === 0 || arg[0] === "") {
    PS1 = home;
  } else if (arg[0] === "..") {
    PS1 = getComment(PS1);
  } else {
    return getFiles(arg);
  }
}

const display = function () {
  return (files.join(" ") + " " + directories.join(" "));
}

const createDirectories = function (name) {
  if (name.length === 0 || name[0] === "") {
    return;
  }
  directories.push(name);
}

const createFiles = function (name) {
  if (name.length === 0 || name[0] === "") {
    return;
  }
  files.push(name);
}

const notFound = function (command) {
  return ("jarvis: no such command found : " + command);
}

const removeDirectory = function (name){
  const list = directories.flat();
  const directory = name.join();
  const index = list.indexOf(directory);
  list.splice(index, 1);
  directories = list;
}

const removeFile = function (name){
  const list = files.flat();
  const file = name.join();
  const index = list.indexOf(file);
  list.splice(index, 1);
  files = list;
}

const externalCommand = function (command, arg) {
  const list = [["ls", display], ["cd", cd], ["mkdir", createDirectories], ["touch", createFiles], ["rmdir", removeDirectory], ["rm", removeFile]];
  const choice = list.filter(function (x) { return x[0] === command }).flat();
  if (choice.length !== 0) {
    return choice[1](arg);
  }
  return notFound(command);
}

const runCommand = function (command, arg) {
  if (command.length === 0) {
    return;
  }
  switch (command) {
    case "echo":
      return arg.join(" ");
    case "pwd":
      return PS1;
    default:
      return externalCommand(command, arg);
  }
}

while (true) {
  const input = prompt(PS1 + " ~ %");
  const [command, ...arg] = input.split(" ");
  const result = runCommand(command, arg);
  if (result !== undefined) {
    console.log(result);
  }
}