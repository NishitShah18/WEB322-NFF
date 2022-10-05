function guessMyTestMark() {
  let mark = Math.floor(Math.random() * 100);
  return new Promise((res, rej) => {
    if (mark < 50) {
      rej("is too bad");
    } else {
      res(mark);
    }
  });
}
guessMyTestMark()
  .then((marks) => console.log("Marks : ", marks))
  .catch((err) => console.log("The result ", err));
