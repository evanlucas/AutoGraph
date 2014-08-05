angular.module('AutoGraph').directive('buttonDirective', function(){

    return {
        type: 'svg',
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'template.svg',

        link: function (scope, element, attributes, ctrl, transclude) {
            alert("button linked!");
        }
    };

});
