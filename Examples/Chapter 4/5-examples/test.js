describe('counterDirective', function() {
  var injector;
  var element;
  var scope;

  beforeEach(function() {
    // You want to be able to bootstrap AngularJS yourself
    // so that you have access to the dependency injector manually
    injector = angular.injector(['myApp']);

    // $compile creates the HTML element for testing
    // ng-app bootstraps this for you in development
    injector.invoke(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = $compile('<counter-directive></counter-directive>')(scope);
      scope.$apply();
    });
  });

  it('increments counter when you click', function() {
    assert.equal(element.text(), 'You\'ve clicked this div 0 times');
    element.find('div').click();
    assert.equal(element.text(), 'You\'ve clicked this div 1 times');
  });
});
