---
layout: content
title:  "Stylesheets Folder Architecture"
permalink: /contents/stylesheets-folder-architecture
---

The CSS rules should be organized in four folders, organized in different folders. These categories are listed below from the most generic to the more specific (the alphabetical order matches this same order for practical purposes).

> This architecture is heavily influenced by the [SMACSS Framework](https://smacss.com) and its [CSS Rules Categorization](https://smacss.com/book/categorizing).

## 1. Ambience

Contains definitions of basic characteristics of the project, such as fonts, font sizes, color palette and other variables

**Basic of files:**
- **colors.scss**: contains the color palette of the project as variables, to be used throughout the code.
- **fonts.scss**: imports the font families that will be used in the project.
- **typography.scss**: contains variables related to typography, such as font sizes for the headings and line height.

## 2. Base

Contains another set of basic structures for the project, such as: normalizes or mixins.

**Basic of files:**
- **normalize.scss**: a stylesheet used to reset native browser properties.
- **unclassed.scss**: set styles for basic html tags, those who don't usually have a class.
- **mixins.scss**: contains structures that repeats throughout the project classes.

## 3. Components

This is where you'll find most of the Sass files. Contains Sass files for each individual component on the project.

**Basic of files:**
- **table-article.scss**: contains every single aspect intended for a table in a article inside the project.
- **form-foreign.scss**: a form oriented for foreign users.
- **list-download.scss**: imports most classes that interfere in a download list inside the project structure.

Componets should always have the same name of the component’ class they refer to. For example: the file for the component with the class `.table-article` should be `_table-article.scss`.
