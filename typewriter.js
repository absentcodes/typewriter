const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; // Increasing delay for each character by 1 second
}


// Adding a newline character after all the characters are printed
setTimeout(() => {
  process.stdout.write('\n');
}, delay);