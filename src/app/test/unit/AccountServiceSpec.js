describe('Account Service',function(){
    beforeEach(module('App'));
    var AccountService;
    beforeEach(inject(function($injector){
        AccountService=$injector.get('AccountService');

    }));

    it('count is defined',function(){
        expect(AccountService.count).toBeDefined();

    })


})