// The Plotly library (see https://plotly.com/javascript/)
//
// This passes json.data directly to Plotly's newPlot() function.
// See its documentation here for details regarding the format:
// https://plotly.com/javascript/plotlyjs-function-reference/#plotlynewplot
window.VisualizationTools.plotly = function(element, json, callback) {
    loadScript('https://cdn.plot.ly/plotly-4.1.1.min.js')
        .then(function() {
            window.Plotly.newPlot(element, json.data);
            callback(element, element.childNodes[0]);
        })
        .catch(function(error) {
            console.error('Could not load Plotly:', error);
        });
};