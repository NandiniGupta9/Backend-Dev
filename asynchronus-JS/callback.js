function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 done");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 done");
    callback();
  }, 1000);
}

// execution
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed using Callbacks");
    });
  });
});