// A tool that ensures D3 is loaded, creates an SVG in which it can
// operate, and then calls the callback that can use D3 as it pleases.
//
// This is also therefore a very primitive visualization tool.
window.VisualizationTools.d3 = function ( element, json, callback ) {
    var container = document.createElement( 'div' );
    element.appendChild( container );
    loadScript('https://d3js.org/d3.v5.min.js')
        .then(function() {
            container.innerHTML = '<svg></svg>';
            var svg = container.childNodes[0];
            callback( element, svg );
        })
        .catch(function(error) {
            console.error('Could not load D3:', error);
        });
};