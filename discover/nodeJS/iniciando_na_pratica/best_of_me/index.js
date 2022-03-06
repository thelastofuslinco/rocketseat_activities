const questions = [
  "What did i learn today?",
  "Whay you are upset? And what you can do to fix that?",
  "What make me happy today?",
  "How many people did i help today?",
];

const ask = (index = 0) => {
  process.stdout.write(questions[index] + "\n");
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
        "What did i learn today?"
        ${answers[0]}
        "Whay you are upset? And what you can do to fix that?"
        ${answers[1]}
        "What make me happy today?"
        ${answers[2]}
        "How many people did i help today?"
        ${answers[3]}
    `);
});
