
angular
   .module('users')
   .controller('UserController', [
      '$scope', 'userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
      UserController
   ]);

function UserController( $scope, userService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    $scope.selected     = 'overview';
    $scope.toggleList   = toggleUsersList;


    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    $scope.selectSection = function( section ) {
      $scope.selected = section;
    }

    $scope.gotoPendingBills = function () {
        $scope.selectedBillsTab = 1;
        $scope.selectSection('bills');
    }

    $scope.gotoAllBills = function () {
        $scope.selectedBillsTab = 0;
        $scope.selectSection('bills');
    }

};
