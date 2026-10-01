## 1.5.1 (2019-03-28)

- Point release with a bug fix regarding rendering graphs from the REPL.

## 1.5.0 (2019-02-26)

- Made the package independent of the Jupyter Notebook; it now detects
  whether it is being run in that environment or not, and configures itself
  appropriately (but can be reconfigured on the fly to a degree).
- If being run from the GAP REPL, plotting functions create temporary HTML
  pages with visualizations in them and display them using the system's
  default web browser.

## 1.3.0 (2018-12-03)

- Added high-level Plot() and PlotGraph() functions to make the package
  much easier to use
- Now supports installing new visualization tools at runtime
- More options supported and documented
- Many more examples added to manual, some moved from external .ipynb file
- Improved testing scripts

## 1.2.0 (2018-10-28)

- First version of the package created (September 2018)
- Renamed to JupyterViz (from Jupyter-Viz) to respect GAP naming
  requirements
- Submitted to official GAP package repository for inclusion in
  GAP 4.10
