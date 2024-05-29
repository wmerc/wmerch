---
title: "Event Site CMS"
company: "Questex"
description: "A platform to host live event websites"
cover: "/assets/Events-siteimage.jpg"
date: 2017-03-09
tags:
  - Product Design
  - Art Direction
  - Branding
---

## Challenge & Goals

In an attempt to unify the array of sites being used by the various business units in the company, we created a new platform on Drupal 8. The goal of the project was to entice visitors to become registrants of the event, allow sponsors to get more information about partnering with the event and to inform users of event schedules, speakers and basic information. In addition to the focus on the end-user experience, the ease of use from the editor's perspective was very important as well. And the flexibility of the platform to meet the needs of the various groups which would use this platform.

- Create a single platform for an expanding number of live event sites
- Allow customization of displayed content types
- Separate presentation layer from data for unique branding requirements
- Enable editors to entirely manage the site without causing unintended consequences

## Requirements Gathering

One of the first steps in creating this new platform was to understand how the current sites were being utilized and managed. This involved creating an inventory of content types, user roles, and speaking with site editors to capture any unique conditions. Once we had all this data, we created an MVP for the data types we would support, and the functionality we would include.

![User types and content types](./Events-usercontent.jpg)

## Wireframes

We selected a group of users to act as our user voice in the process and heavily involved them in the process for feedback and validation. On the design side, this allowed us to create a well-defined user story and understand the success criteria of the design. We took the research and created our initial wireframes and iterated upon after presenting them to the client. Since we wanted this platform to apply to as many types of events as possible, designing it in a component-based fashion would allow site admin to choose which blocks they needed and could do without. The design had to allow for the neighboring of unknown components and follow a modular layout in which each component is independent of the others.

![Events platform wireframe](./Events-wireframe.jpg)

## UI

Once we were able to confirm the ideal user experience and content considerations through the wireframes we moved to a higher fidelity comp, created in Sketch. The importance of the comp was to communicate the branding applications to the platform and to serve as a build guide for the front end development team. After multiple iterations, and input into the feasibility of implementation and adherence of brand standards we arrived at these mockups.

![Events platform desktop comp](./Events-desktop-1489093977.jpg)
![Events platform responsive comp](./Events-responsive.jpg)

## Project Completion

Since this was a platform being designed it needed a level of abstraction to be applicable to other brands. So while the mockup stage was in progress one of the constraints we kept in mind was the ability to practically theme another brand on the platform. This meant using colors strategically so they could easily be swapped out without breaking the design. One way to solve this is by using shades of an inputted base color, then using SASS mixins to generate predefined tones of that value.

We extracted a style guide from the comp, it was important to do this after the mockup was done so we would know what parts of the platform were available to be themed and how the colors would apply. This style guide then served as a template for new brands to join the platform predictably.

![Events platform style guide](./Events-styleguide.jpg)

## Takeaways

- In addition to creating the content types which could be added to the platform, showcasing best practices around these content types is important in ensuring quality standards are met.
- There will be instances where a brand's color palette won't seamlessly integrate into the platform, so there needs to be a way to handle that gracefully.

![Final sites](./Events-finalsites.jpg)

Some of the sites already built on the platform can be viewed here: [ncbshow.com](http://www.ncbshow.com/), [sensorsexpo.com](http://www.sensorsexpo.com/), [hotelroi.com](http://www.hotelroi.com/), [StreamTVShow.com](https://www.streamtvshow.com/). You can see how the sites look different with various modules being used and the component-based system in place. The components continue to be improved and added to.
