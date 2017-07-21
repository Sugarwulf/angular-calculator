var angCalc;
(function (angCalc) {
    angular.module("angCalc", []);
})(angCalc || (angCalc = {}));
var HomeController = (function () {
    function HomeController() {
    }
    HomeController.prototype.addNums = function (a, b) {
        this.result = a + b;
    };
    return HomeController;
}());
angular.module("angCalc").controller("HomeController", HomeController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBRWhCO0FBRkQsV0FBVSxPQUFPO0lBQ2YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxFQUZTLE9BQU8sS0FBUCxPQUFPLFFBRWhCO0FBRUQ7SUFBQTtJQUtBLENBQUM7SUFIQyxnQ0FBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhbmdDYWxjIHtcbiAgYW5ndWxhci5tb2R1bGUoXCJhbmdDYWxjXCIsIFtdKTtcbn1cblxuY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgcmVzdWx0O1xuICBhZGROdW1zKGEsIGIpIHtcbiAgICB0aGlzLnJlc3VsdCA9IGEgKyBiO1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKFwiYW5nQ2FsY1wiKS5jb250cm9sbGVyKFwiSG9tZUNvbnRyb2xsZXJcIiwgSG9tZUNvbnRyb2xsZXIpO1xuIl19