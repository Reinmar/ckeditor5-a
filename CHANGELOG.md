Changelog
=========

## [4.2.0](https://github.com/Reinmar/ckeditor5-a/compare/v4.1.0...v4.2.0) (2017-06-08)

### Features

* Some feature in "A". Closes [#1](https://github.com/Reinmar/ckeditor5-a/issues/1). ([8a8eac0](https://github.com/Reinmar/ckeditor5-a/commit/8a8eac0))


## [4.1.0](https://github.com/Reinmar/ckeditor5-a/compare/v4.0.1...v4.1.0) (2017-06-08)

### Features

* Introduced nothing. Closes [#666](https://github.com/Reinmar/ckeditor5-a/issues/666). ([a162c6d](https://github.com/Reinmar/ckeditor5-a/commit/a162c6d))


## [4.0.1](https://github.com/Reinmar/ckeditor5-a/compare/v4.0.0...v4.0.1) (2017-05-25)

Internal changes only (updated dependencies, documentation, etc.).

## [4.0.0](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.6...v4.0.0) (2017-05-11)

### Bug fixes

* `ViewConverterBuilder#fromAttribute()` should not create incorrect matcher object for `Matcher` if passed attribute was other than `class` or `style`. Closes [#919](https://github.com/Reinmar/ckeditor5-a/issues/919). ([e731f8f](https://github.com/Reinmar/ckeditor5-a/commit/e731f8f))

  Minor upgrades to `ViewConversionBuilder`:

  * converters from `ViewConversionBuilder` will not convert if "creator function" returned `null`.
  * simplified view converters building by making `ViewConversionBuilder#toAttribute()` `value` param optional. If not set, the attribute value is taken from converted view element.

### Features

* Introduced markers serialization. Closes [#787](https://github.com/Reinmar/ckeditor5-a/issues/787). Closes [#846](https://github.com/Reinmar/ckeditor5-a/issues/846). ([c2c20f2](https://github.com/Reinmar/ckeditor5-a/commit/c2c20f2))

### Other changes

* Default conversion. Mapper position mapping algorithms are now added as callbacks with low priority and are fired only if earlier callbacks did not provide a result. Closes [#884](https://github.com/Reinmar/ckeditor5-a/issues/884). ([214458b](https://github.com/Reinmar/ckeditor5-a/commit/214458b))

### BREAKING CHANGES

* `BuildModelConverter#fromMarkerCollapsed` is removed. Use `BuildModelConverter#fromMarker` instead.
* Since default position mapping algorithms are attached with low priority, custom position mapping callbacks added with higher priority won't receive position calculated by default algorithms in data. To execute default position mapping algorithms and use their value, hook custom callback with lower priority.

### NOTE

* `insertUIElement` model to view converter now supports collapsed and non-collapsed ranges.


## [3.1.6](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.5...v3.1.6) (2017-04-24)

Internal changes only (updated dependencies, documentation, etc.).

## [3.1.5](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.4...v3.1.5) (2017-04-24)

Internal changes only (updated dependencies, documentation, etc.).

## [3.1.4](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.3...v3.1.4) (2017-04-24)

Internal changes only (updated dependencies, documentation, etc.).

## [3.1.3](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.2...v3.1.3) (2017-04-20)

### Bug fixes

* Adjusted API to the latest changes. ([711af57](https://github.com/Reinmar/ckeditor5-a/commit/711af57))


## [3.1.2](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.1...v3.1.2) (2017-04-20)

Internal changes only (updated dependencies, documentation, etc.).

## [3.1.1](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.0...v3.1.1) (2017-04-11)

Internal changes only (updated dependencies, documentation, etc.).

## [3.1.1](https://github.com/Reinmar/ckeditor5-a/compare/v3.1.0...v3.1.1) (2017-04-10)

Internal changes only (updated dependencies, documentation, etc.).

## [3.1.0](https://github.com/Reinmar/ckeditor5-a/compare/v3.0.5...v3.1.0) (2017-04-06)

### Features

* New Feature. ([2e38009](https://github.com/Reinmar/ckeditor5-a/commit/2e38009))


## [3.0.5](https://github.com/Reinmar/ckeditor5-a/compare/v3.0.4...v3.0.5) (2017-03-29)

Internal changes only (updated dependencies, documentation, etc.).

## [3.0.4](https://github.com/Reinmar/ckeditor5-a/compare/v3.0.3...v3.0.4) (2017-03-29)

Internal changes only (updated dependencies, documentation, etc.).

## [3.0.3](https://github.com/Reinmar/ckeditor5-a/compare/v3.0.2...v3.0.3) (2017-03-28)

Internal changes only (updated dependencies, documentation, etc.).

## [3.0.2](https://github.com/Reinmar/ckeditor5-a/compare/v3.0.1...v3.0.2) (2017-03-28)

### Bug fixes

* Typo. ([283e98e](https://github.com/Reinmar/ckeditor5-a/commit/283e98e))


## [3.0.1](https://github.com/Reinmar/ckeditor5-a/compare/v3.0.0...v3.0.1) (2017-03-11)

### Features

* Lorem ipsum... ([ed02b36](https://github.com/Reinmar/ckeditor5-a/commit/ed02b36))

### BREAKING CHANGES

* Lololo...


## [3.0.0](https://github.com/Reinmar/ckeditor5-a/compare/v2.1.0...v3.0.0) (2017-02-22)

### Bug fixes

* First fix. ([47ebaea](https://github.com/Reinmar/ckeditor5-a/commit/47ebaea))
* Made a breaking change. ([0be9be8](https://github.com/Reinmar/ckeditor5-a/commit/0be9be8))
* Second fix. ([25bb999](https://github.com/Reinmar/ckeditor5-a/commit/25bb999))

### Features

* Introduced foo (1). Closes: [#1](https://github.com/Reinmar/ckeditor5/issues/1). Closes: [#2](https://github.com/Reinmar/ckeditor5/issues/2). ([98c48c6](https://github.com/Reinmar/ckeditor5-a/commit/98c48c6))
* Introduced foo (2). Closes: [#1](https://github.com/Reinmar/ckeditor5/issues/1). Closes: [#2](https://github.com/Reinmar/ckeditor5/issues/2). ([4b266d4](https://github.com/Reinmar/ckeditor5-a/commit/4b266d4))
* Introduced foo. Closes: [#1](https://github.com/Reinmar/ckeditor5/issues/1). Closes: [#2](https://github.com/Reinmar/ckeditor5/issues/2). ([cb59c82](https://github.com/Reinmar/ckeditor5-a/commit/cb59c82))

### Other changes

* Foo. ([1e86e0e](https://github.com/Reinmar/ckeditor5-a/commit/1e86e0e))


### BREAKING CHANGES

* X doesn't equal Y anymore.

### NOTE

* Some note (2).
* Another notei (2).
* Some note (1).


## [2.1.1](https://github.com/Reinmar/ckeditor5-a/compare/v2.1.0...v2.1.1) (2017-02-10)

Internal changes only (updated dependencies, documentation, etc.).

## [2.1.0](https://github.com/Reinmar/ckeditor5-a/compare/v2.0.2...v2.1.0) (2017-02-10)

Internal changes only (updated dependencies, documentation, etc.).

## [2.0.2](https://github.com/Reinmar/ckeditor5-a/compare/v2.0.1...v2.0.2) (2017-02-10)

Internal changes only (updated dependencies, documentation, etc.).

## [2.0.1](https://github.com/Reinmar/ckeditor5-a/compare/v2.0.0...v2.0.1) (2017-02-08)

Internal changes only (updated dependencies, documentation, etc.).

## [2.0.0](https://github.com/Reinmar/ckeditor5-a/compare/v1.3.2...v2.0.0) (2017-02-08)

Internal changes only (updated dependencies, documentation, etc.).

## [1.3.2](https://github.com/Reinmar/ckeditor5-a/compare/v1.3.1...v1.3.2) (2017-02-08)

Internal changes only (updated dependencies, documentation, etc.).

## [1.3.1](https://github.com/Reinmar/ckeditor5-a/compare/v1.3.0...v1.3.1) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.3.0](https://github.com/Reinmar/ckeditor5-a/compare/v1.2.1...v1.3.0) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.2.1](https://github.com/Reinmar/ckeditor5-a/compare/v1.2.0...v1.2.1) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.2.0](https://github.com/Reinmar/ckeditor5-a/compare/v1.1.1...v1.2.0) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.1.1](https://github.com/Reinmar/ckeditor5-a/compare/v1.1.0...v1.1.1) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.1.0](https://github.com/Reinmar/ckeditor5-a/compare/v1.0.2...v1.1.0) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.0.2](https://github.com/Reinmar/ckeditor5-a/compare/v1.0.1...v1.0.2) (2017-02-07)

Internal changes only (updated dependencies, documentation, etc.).

## [1.0.1](https://github.com/Reinmar/ckeditor5-a/compare/v1.0.0...v1.0.1) (2017-02-06)

### Bug fixes

* Message commit. ([c086a06](https://github.com/Reinmar/ckeditor5-a/commit/c086a06)), closes [#2](https://github.com/Reinmar/ckeditor5-a/issues/2) [#5](https://github.com/Reinmar/ckeditor5-a/issues/5) [#6](https://github.com/Reinmar/ckeditor5-a/issues/6)


### NOTE

* Nothing to add.


## [1.0.0](https://github.com/Reinmar/ckeditor5-a/compare/v0.4.5...v1.0.0) (2017-02-06)

### Features

* Added gulp and changelog task. Closes [#1](https://github.com/Reinmar/ckeditor5-a/issues/1). Closes [#2](https://github.com/Reinmar/ckeditor5-a/issues/2). ([ec57e76](https://github.com/Reinmar/ckeditor5-a/commit/ec57e76))
* Main module displays `console.log`. Closes [#5](https://github.com/Reinmar/ckeditor5-a/issues/5). ([334a492](https://github.com/Reinmar/ckeditor5-a/commit/334a492)), closes [#6](https://github.com/Reinmar/ckeditor5-a/issues/6)
* Removed empty file. Closes [#3](https://github.com/Reinmar/ckeditor5-a/issues/3), [#4](https://github.com/Reinmar/ckeditor5-a/issues/4). ([8a4b24d](https://github.com/Reinmar/ckeditor5-a/commit/8a4b24d))


### BREAKING CHANGE

* The main module will display `console.log`.

### NOTE

* It should also close [#4](https://github.com/Reinmar/ckeditor5-a/issues/4).


## [0.4.5](https://github.com/Reinmar/ckeditor5-a/compare/v0.4.4...v0.4.5) (2017-02-02)

Internal changes only (updated dependencies, documentation, etc.).

## [0.4.4](https://github.com/Reinmar/ckeditor5-a/compare/v0.4.3...v0.4.4) (2017-02-02)

Internal changes only (updated dependencies, documentation, etc.).

## [0.4.1](https://github.com/Reinmar/ckeditor5-a/compare/v0.4.0...v0.4.1) (2017-02-02)

Internal changes only (updated dependencies, documentation, etc.).

## [0.4.2](https://github.com/Reinmar/ckeditor5-a/compare/v0.4.0...v0.4.2) (2017-02-01)

Internal changes only (updated dependencies, documentation, etc.).

## [0.4.0](https://github.com/Reinmar/ckeditor5-a/compare/v0.3.1...v0.4.0) (2017-01-27)


### Bug Fixes

* Fixed some bug with something odd. ([956bf53](https://github.com/Reinmar/ckeditor5-a/commit/956bf53))


### Features

* Adding something new. Resolves [#123]([object Object]/123). ([7d9e120](https://github.com/Reinmar/ckeditor5-a/commit/7d9e120))


## [0.3.2](https://github.com/Reinmar/ckeditor5-a/compare/v0.3.1...v0.3.2) (2017-01-27)


### Bug Fixes

* Fixed some bug with something odd. ([956bf53](https://github.com/Reinmar/ckeditor5-a/commit/956bf53))


## [0.3.1](https://github.com/Reinmar/ckeditor5-a/compare/v0.3.0...v0.3.1) (2017-01-26)


### Bug Fixes

* Nothing new. ([f23b8c6](https://github.com/Reinmar/ckeditor5-a/commit/f23b8c6))


## [0.3.0](https://github.com/Reinmar/ckeditor5-a/compare/v0.2.2...v0.3.0) (2017-01-25)


### Features

* Nothing new but we need bump the version. ([ca090f0](https://github.com/Reinmar/ckeditor5-a/commit/ca090f0))


## [0.2.2](https://github.com/Reinmar/ckeditor5-a/compare/v0.2.1...v0.2.2) (2017-01-23)


### Bug Fixes

* Nothing has been fixed. ([73416f5](https://github.com/Reinmar/ckeditor5-a/commit/73416f5))


## [0.2.1](https://github.com/Reinmar/ckeditor5-a/compare/v0.2.0...v0.2.1) (2017-01-13)


### Bug Fixes

* Index module has own backup. ([9a3dea6](https://github.com/Reinmar/ckeditor5-a/commit/9a3dea6))


### NOTE

* Because I wanted to do it.


## [0.2.0](https://github.com/Reinmar/ckeditor5-a/compare/v0.1.0...v0.2.0) (2017-01-13)


### Features

* Introduced another module. ([102c7b6](https://github.com/Reinmar/ckeditor5-a/commit/102c7b6))


### NOTE

* This module is amazing!


## 0.1.0 (2017-01-13)


### Bug Fixes

* Invalid names in package.json. ([d105ec1](https://github.com/Reinmar/ckeditor5-a/commit/d105ec1))


### Features

* Projects Bootstrap. ([eec0edf](https://github.com/Reinmar/ckeditor5-a/commit/eec0edf))
