# Palindrome

Personal boilerplate for Eleventy projects

## Not Included

Heavier-lift techniques that may not be appropriate for every project, but can be referenced from another project:

| Technique                  | Project with example         |
| -------------------------- | ---------------------------- |
| Netlify comment forms      | Fiber blog                   |
| Paginating tagged items    | Personal website             |
| Webmentions                | Personal website             |

## Setup Checklist

[ ] Update package.json with project details
[ ] Go thru eleventy.js and un-comment or delete utilities; move require statements to top of file

## Commands

| Command                    | Purpose                      |
| -------------------------- | ---------------------------- |
| npx @11ty/eleventy         | Build project                |
| npx @11ty/eleventy --serve | Serve project                |

## Reference

* [Eleventy documentation](https://www.11ty.dev/docs/)
* [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html)
* [Luxon date formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

## Front-Matter

```
---
title: 
date: 2021-##-##
tags: ["posts", "foo", "bar"]
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