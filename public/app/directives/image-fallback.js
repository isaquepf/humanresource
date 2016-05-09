app.directive('imageFallback', function() {
    return {
        link: function(scope, elem, attrs) {
            elem.bind('error', function() {
                angular.element(this).attr('src', attrs.imageFallback);
            });
        }
    }
});