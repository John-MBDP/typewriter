const sentence = "hello there from lighthouse labs\n";
let delay = 0;
let interval = 50;
for (const value of sentence) {
  setTimeout(() => {
    process.stdout.write(value);
  }, delay);
  delay += interval;
}
