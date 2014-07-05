describe('Account Controller',function(){
    beforeEach(module('App'));
    desribe('Account Controller',function(){
        var AccountControler,scope;
        beforeEach(inject(function($controller,$rootScope){
            scope=$rootScope.$new();
            AccountControler=$controller('AccountController',{$scope:scope});

        }))
    })
})