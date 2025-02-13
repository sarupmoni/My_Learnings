import { Clock } from "./time.js";

const clock = new Clock(0);

setInterval(() => {
  clock.tick();
  const { hour, minute, second } = clock.time();
  console.log(`${hour}:${minute}:${second}`);
}, 1);
