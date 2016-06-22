app
    .directive("timelineHeader", function(){
    return {
        restrict: 'E',
        template: '<header class="mdl-layout__header"><div layout="row" class="mdl-layout__header-row">'
            +   '<div flex="100"><a href="">Command Alkon APP</div>'
            +   '</div></header>'
    }
});
