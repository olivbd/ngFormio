import {Formio} from 'formiojs';
export default angular.module('formio').directive('formBuilder', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      url: '=?',
      form: '=?',
      options: '<'
    },
    link: function (scope, element) {
      scope.initBuilder(element[0]);
    },
    controller: [
      '$scope',
      function ($scope) {
        let builder = null;
        let builderReady = null;
        let builderElement = null;
        $scope.options = $scope.options || {};

        // Initialize the builder.
        $scope.initBuilder = function(element) {
          builderElement = element;
          builderElement.innerHTML = '';
          builder = new Formio.FormBuilder(builderElement, $scope.form, $scope.options);
          builderReady = builder.setDisplay($scope.form.display);
        };

        $scope.$on('buildSidebar', () => {
          if (builder && builder.instance) {
            builder.instance.buildSidebar();
          }
        });

        // Detect when the display changes.
        $scope.$watch('form.display', display => {
          if (builderReady && display) {
            builderReady.then(() => {
              builder.setDisplay(display);
              if ($scope.url) {
                builder.instance.url = $scope.url;
              }
            });
          }
        });

        $scope.$on('$destroy', function () {
          if (builder && builder.instance) {
            builder.instance.destroy(true);
          }
        });
      }
    ],
    template: '<div/>'
  };
});
