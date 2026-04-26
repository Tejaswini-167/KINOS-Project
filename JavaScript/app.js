const app = angular.module('kinosApp', []);

app.controller('MainController', function ($scope) {

    $scope.bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    $scope.newBooking = {};

    $scope.addBooking = function () {
        $scope.newBooking.id = Date.now();
        $scope.bookings.push($scope.newBooking);
        localStorage.setItem("bookings", JSON.stringify($scope.bookings));
        alert("Booking Added");
        $scope.newBooking = {};
    };

    $scope.deleteBooking = function (id) {
        $scope.bookings = $scope.bookings.filter(b => b.id !== id);
        localStorage.setItem("bookings", JSON.stringify($scope.bookings));
    };

});