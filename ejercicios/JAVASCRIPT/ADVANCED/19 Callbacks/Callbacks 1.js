function printAsyncName(callback, name) {
  setTimeout(function () {
    console.log("Hello");

    setTimeout(function () {
      console.log(name);
      if (typeof callback === "function") {
        callback();
      }
    }, 1000);
  }, 2000);
}
