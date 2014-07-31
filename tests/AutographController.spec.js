'use strict';

describe('AutographController', function(){

    var scope;

    beforeEach(angular.mock.module('AutoGraph'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('AutographController', {$scope: scope});
    }));

    it('should place and clear components', function(){
        expect(scope.placedComponents).not.toEqual(null);
        scope.placeNewComponent({}, 1, 2);
        expect(scope.placedComponents).not.toEqual({});
        scope.clearComponents();
        expect(scope.placedComponents).toEqual({});
    });

});
