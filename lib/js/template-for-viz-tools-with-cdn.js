
window.VisualizationTools.$toolName = function ( element, json, callback ) {
    loadScript($toolString)
        .then(function() {
            $functionBody
        })
        .catch(function(error) {
            console.error('Could not load $toolName', error);
        });
};