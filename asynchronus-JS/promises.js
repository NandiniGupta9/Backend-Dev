function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 done");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 done");
      resolve();
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 done");
      resolve();
    }, 1000);
  });
}

// execution
task1()
  .then(task2)
  .then(task3)
  .then(() => {
    console.log("All tasks completed using Promises");
  });