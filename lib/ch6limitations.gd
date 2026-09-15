#!
#! @Chapter Limitations
#!
#! When this package is being used in a Jupyter Notebook, it has the
#! following limitations.
#!
#!  * If this package is used in <Code>PlotDisplayMethod_Jupyter</Code>
#!    mode in a Jupyter notebook, and a notebook containing visualizations
#!    created by this package is saved and later reloaded, the
#!    visualizations will not persist.  They will be replaced by an error
#!    message instructing the user to re-run the cell that created the
#!    visualization.  You can get around this by setting
#!    <Code>PlotDisplayMethod := PlotDisplayMethod_JupyterSimple</Code>,
#!    but this increases the size of your notebook by embedding this
#!    package's JavaScript code in the notebook itself.
#!    Note that <Code>PlotDisplayMethod_Jupyter</Code> is the default
#!    mode in the notebook.
#!  * The <Code>nbconvert</Code> tool, which converts <File>.ipynb</File>
#!    files into other formats, will not include the visualizations, because
#!    <Code>nbconvert</Code> is not a browser that can evaluate the
#!    JavaScript code that generates the visualizations.
#!  * Most visualizations load a JavaScript library from a CDN, and thus
#!    require a working Internet connection.
#!
#! When it is being used from the command line, it has the following
#! limitations.
#!
#!  * The JavaScript function <Code>runGAP</Code> introduced in Section
#!    <Ref Sect="Section_plainhtml"/> is not available.  That function
#!    depends upon the ability to ask the Jupyter Kernel to run &GAP; code,
#!    and thus when there is no Jupyter Kernel, that function cannot work.
#!  * Each new call to <Ref Func="Plot"/>, <Ref Func="PlotGraph"/>, or
#!    <Ref Func="CreateVisualization"/> will be stored in a new temporary
#!    file on the user's filesystem and thus shown in a new tab or window
#!    in the user's browser.  That is, one does not iteratively improve a
#!    single visualization, but is forced to open a new window or tab for
#!    each call.
#!  * The generated HTML page loads jQuery, RequireJS, and most
#!    visualization libraries from CDNs, and thus requires a working
#!    Internet connection.
#!
