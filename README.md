# vanillaAppendAround

A vanilla JavaScript port of [Filament Group's AppendAround](https://github.com/filamentgroup/AppendAround). A pattern for responsive markup.

No dependencies. 1K minified before gzip.

**[View Demo](https://rawgit.com/davidrapson/vanillaAppendAround/master/examples/global/index.html)**

## Installation

**Install with bower**
```
bower install https://github.com/davidrapson/vanillaAppendAround.git
```

**Install with JSPM**
```
jspm install vanillaAppendAround=github:davidrapson/vanillaAppendAround
```

## How-to

1. Insert potential element containers throughout the DOM
2. Give each container a `data-set` attribute with a value that matches all other containers' values
3. Place your appendAround content in one of the potential containers
4. Configure your CSS to only display one potential container at a time (and display others depending on `@media` conditions in your CSS)
5. Call `appendAround()` once when the DOM is ready, and it'll keep all appendAround elements in a visible container at all times.

## Usage

See [examples](examples/) for full usage. Configuration options are as follows:

```js
appendAround({
  // Selector to use for appendAround elements. [Default '.js-append']
  selector: '.js-append',
  // Attribute to use for sets. [Default 'data-set']
  attribute: 'data-set',
  // Amount to debounce resize listener (ms). [Default 66]
  debounceDuration: 66
});
```

## Browser Support

~IE9+ or any browser with support for:

- [querySelector](http://caniuse.com/#search=querySelector)
- [getComputedStyle](http://caniuse.com/#search=getComputedStyle)
