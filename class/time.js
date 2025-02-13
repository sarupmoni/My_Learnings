export class Clock {
  #secondsElapsed;

  constructor(second) {
    this.#secondsElapsed = second;
  }

  tick() {
    this.#secondsElapsed += 1;
    return this.#secondsElapsed;
  }

  time() {
    const second = this.#secondsElapsed % 60;
    const minute = Math.floor(this.#secondsElapsed / 60) % 60;
    const hour = Math.floor(this.#secondsElapsed / 3600);
    return { hour, minute, second };
  }
}

const s = new Clock(10);

setInterval(() => {
  console.log(s.tick());
}, 1000);
