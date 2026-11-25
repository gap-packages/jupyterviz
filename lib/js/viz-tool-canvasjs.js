
// The CanvasJS library (see https://canvasjs.com//
// This passes json.data directly to the CanvasJS.Chart constructor,
// then calls render() on the resulting object.
// After the rendering is complete, we then resize the output element to
// be large enough to contain the chart that has been created within it,
// because CanvasJS does not do so automatically.
// See the documentation here for details regarding the format:
// https://canvasjs.com/docs/charts/chart-types/
window.VisualizationTools.canvasjs = function ( element, json, callback ) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/canvasjs/1.7.0/canvasjs.min.js')
    .then(function() {
        ( new window.CanvasJS.Chart( element, json.data ) ).render();
        window.resizeToShowContents( element );
        callback( element, element.childNodes[0] );
    })
    .catch(function(error) {
        console.error('Could not load canvasjs.', error);
    });
};
