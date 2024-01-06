# Palindrome

Personal boilerplate for Eleventy projects

## Not Included

Heavier-lift techniques that may not be appropriate for every project, but can be referenced from another project:

| Technique                  | Project with example         |
| :------------------------- | :--------------------------- |
| Netlify comment forms      | World Snacks                 |
| Paginating tagged items    | Personal website             |
| Webmentions                | Personal website             |

## Setup from Template Checklist

* [ ] Update `package.json`, `_data/site.json`, and `feed.njk` with project details
* [ ] If not using posts: delete `feed.njk`, RSS code in `eleventy.js`, post and pagination bits in `_includes`
* [ ] Go thru `eleventy.js` and un-comment or delete utilities
* [ ] Update or remove `icon-sprite.njk`
* [ ] Update `head.njk` with any info for: RSS, social metadata, icons
* [ ] Update images referenced in `manifest.webmanifest`

-------------------------------------------------------------

## To build

0. Install [Node](https://nodejs.org/) :)
1. Clone the repo
2. Run `npm install`
3. Run `npm run start`
4. Visit `localhost:8080`

## Commands

| Command                      | Purpose                      |
| :--------------------------- | :--------------------------- |
| `npm run start`              | Serve project + watch Sass   |
| `npm run build`              | Build project                |
| `npm run checks`             | Validate HTML & lint JS      |
| `npm run lint`               | Run eslint                   |
| `npm run lint:fix`           | Run eslint and fix issues    |
| `npm run validate`           | Run html-validate            |

## Front-Matter

```
---
title: 
date: 2021-##-##
tags: ["posts", "foo", "bar"]
featureSrc: (Omit "-m", which is added automatically)
featureExt: 
featureAlt: 
---
```

## Media

### Blog image sizes

| Size | PX width |
| ---: | -------: |
| s    | 600      |
| m    | 800      |
| l    | 1200     |
| xl   | 2000     |

### Responsive image include

Filename, extension, max size, alt text, classes:

```
{% responsiveImage "melanierichards-", "jpg", "xl", "Alt", "" %}
```

* Max size can be `l` or `xl`
* Classes can include `c-media--limit-width`

### SVG sprite references

```
<svg role="image" focusable="false" class="c-rating" viewBox="0 0 20 20" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <title>Accessible label</title>
  <use href="#" y="-20">
</svg>
```

## Reference

* [Eleventy docs](https://www.11ty.dev/docs/)
* [ESLint docs](https://eslint.org/)
* [HTML Validate docs](https://html-validate.org/)
* [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html)
* [Luxon date formatting](https://moment.github.io/luxon/docs/manual/formatting.html)
