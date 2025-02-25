---
title: "Remote Learning Features"
company: "New Visions for Public Schools"
description: "Providing visibility for schools transitioning to remote learning"
cover: "#"
date: 2020-05-01
tags:
  - Product Design
  - User Experience
  - Feature Development
  - Data Analysis
---

## The Challenge

As part of a wider product redesign the team decided to revisit our existing data vizualization library and look for opportunities to improve the visual design and ensure the graphs met accessibility standards. I led the design for this work, worked through the research, solution and implementation in partnership with engineering team members. This portion of the redesign lasted a few weeks, between proposing solutions, getting feedback from stakeholders and iterating based on that feedback.

## Research and Benchmarking

Our existing charting color library had been created by previous team members, and it was unclear what standards they met outside of their alignment to the style guide. One of the first steps was to understand current industry standards and to benchmark our existing color system.

I took at some popular design systems and read about different accepteance criteria for data visualization color systems. In my previous work on geospatial data visualization, I had remembered reading [Cynthia Brewer's work](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3) on colors for cartogrpahy, and looked deeper into why the color pairs were chosen. I noticed they referenced sequential color palettes, and from there read through parts of [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) to get a better grasp on what the different standards and terms were in the data viz space. I also cross-referenced [WCAG 2.1 docs](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) to better understand what the contrast requirements were for non-text elements, as it wasn't something I was very familiar with. From this research I came up with a list of requirements for our new graph color palette:

- We needed 3 different color palettes for categorical data, sequential data, and divergent data
- Graph elements needed a 3:1 contrast ratio from neighboring graph elements
- The color palettes would need to be tested against [common color vision impairments](https://www.colourblindawareness.org/colour-blindness/colour-blindness-experience-it/)

### Ideating

After understanding the requirements and success criteria I set out to find out how other orgs had solved this problem within their design systems. I compiled color palettes from orgs like Adobe, IBM, and Gitlab and applied them to a sample screen from our product to better understand what sort of change this would be. I also passed these initial tests through a color blindness filter to start getting familiar with the toolset. None of these palettes would fit naturally within our brand, but they were helpful in identifying the different types of solutions out there.
