[![CI](https://github.com/gap-packages/jupyterviz/actions/workflows/CI.yml/badge.svg)](https://github.com/gap-packages/jupyterviz/actions/workflows/CI.yml)
[![Code Coverage](https://codecov.io/github/gap-packages/jupyterviz/coverage.svg?branch=master&token=)](https://codecov.io/gh/gap-packages/jupyterviz)

# The Jupyter Notebook Visualization Package

## Purpose

This package adds visualization tools to GAP that can be used either in
Jupyter notebooks or from the GAP REPL. These include standard line and bar
graphs, pie charts, scatter plots, and graphs in the vertices-and-edges
sense.

## Implementation

In a Jupyter notebook, these visualizations are implemented by importing
existing JavaScript visualization libraries into the notebook as needed,
based on the kind of visualization requested by the GAP code.

Outside of the notebook, a visualization command creates a temporary HTML
file with the Javascript code and JSON data needed to build the
visualization, then displays it using the system default web browser.

The architecture of the package is such that additional JavaScript
visualization libraries can be added easily.

## Usage

The package does not need to be compiled.

See the manual on [the package website](https://gap-packages.github.io/jupyterviz),
which contains many usage examples.

Or experiment with a live Jupyter notebook on Binder:
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/gap-packages/jupyterviz/master?filepath=inst%2Fgap-4.10.0%2Fpkg%2Fjupyterviz%2F).
(It can be a long loading time, so have patience!)

## Maintainer

JupyterViz was written by Nathan Carter and is now maintained by the GAP
Team. Please report bugs and feature requests via the
[issue tracker](https://github.com/gap-packages/jupyterviz/issues)
rather than contacting the original author.

This GAP package is free software; you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the Free
Software Foundation; either version 2 of the License, or (at your option)
any later version.
