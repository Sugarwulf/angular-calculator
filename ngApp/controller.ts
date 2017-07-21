namespace angCalc {
  angular.module("angCalc", []);
}

class HomeController {
  public result;
  addNums(a, b) {
    this.result = a + b;
  }
}

angular.module("angCalc").controller("HomeController", HomeController);
