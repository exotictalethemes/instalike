self.addEventListener("message", function(e) {
    var args = e.data.args;
    this.console.log("it works")
    // do whatever you need with the arguments
  }, false);