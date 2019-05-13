# Contributing to babylon-mtoon-material

This rules respect [original babylon.js contributing.md](https://github.com/BabylonJS/Babylon.js/blob/master/contributing.md).

## Golden rules

**Babylon.js** is built upon 3 golden rules:

1. You cannot add code that will break backward compatibility
2. You cannot add code that will slow down the rendering process
3. You cannot add code that will make things complex to use

### Backward compatibility

The first golden rule is a really important one because we want our users to trust Babylon.js. And when we need to introduce something that will break backward compatibility, we know that it will imply more work for our customers to switch to a new version. So even if something could be simpler to do by breaking the backward compatibility, we will not do it (exceptions may apply of course if there is a problem with performance or if this is related to a bug).

### Performance

Babylon.js is a 3D rendering engine. So every piece of code has to be scrutinized to look for potential bottlenecks or slow downs. Ultimately the goal is to render more with less resources.

### Simplicity

A developer should be able to quickly and easily learn to use the API.

Simplicity and a low barrier to entry are must-have features of every API. If you have any second thoughts about the complexity of a design, it is almost always much better to cut the feature from the current release and spend more time to get the design right for the next release.

You can always add to an API, you cannot ever remove anything from one. If the design does not feel right, and you ship it anyway, you are likely to regret having done so.

## Issues

Please raise **only babylon-vrm-loader specific** issues.

Issues about babylon.js-specific or VRM original-specific will be ignored.

## Pull requests

TBA

## Releases

This repository uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

When some `feat:` or `fix:`-prefixed commits pushed to master, CircleCI automatically releases new version to GitHub Releases and npm.
