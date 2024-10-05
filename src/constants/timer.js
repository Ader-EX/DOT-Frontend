const TIMER = {
  hours: [],
  minutes: [],
  seconds: [],
};

for (let i = 0; i < 100; i++) {
  TIMER.hours.push({ key: i, text: i, value: i * 60 * 60 });
}

for (let i = 0; i < 60; i++) {
  TIMER.minutes.push({ key: i, text: i, value: i * 60 });
}

for (let i = 0; i < 60; i++) {
  TIMER.seconds.push({ key: i, text: i, value: i });
}

export default TIMER;
