# vanillaAppendAround

A vanilla JavaScript port of [Filament Group's AppendAround](https://github.com/filamentgroup/AppendAround). A pattern for responsive markup.

No dependencies. 1K minified before gzip.

**[View Demo](demo.html)**

## Browser Support

~IE9+ or any browser with support for:

- [querySelector](http://caniuse.com/#search=querySelector)
- [getComputedStyle](http://caniuse.com/#search=getComputedStyle)

## How-to

1. Insert potential element containers throughout the DOM
2. Give each container a data-set attribute with a value that matches all other containers' values
3. Place your appendAround content in one of the potential containers
4. Configure your CSS to only display one potential container at a time (and display others depending on `@media` conditions in your CSS)
5. Call `appendAround()` once when the DOM is ready, and it'll keep itself in a visible container at all times.

## Usage

**Example markup:**

```html
<div class="u-display-wide" data-set="demo"></div>

<ul>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Maiores delectus eum, velit perferendis!</li>
  <li>Illo repellat, quisquam unde voluptate?</li>
  <li>Quo magnam suscipit veniam, rerum.</li>
  <li>Quo iure totam temporibus odit!</li>
  <li>Reiciendis suscipit necessitatibus inventore quaerat.</li>
</ul>

<div class="u-display-until-wide" data-set="demo">
  <div class="sample js-append">Sample appendAround Element</div>
</div>
```

**Example css:**

```css
.sample {
  padding: 1em;
  background: #f3f3f3;
}

.u-display-wide {
  display: none;
}
@media (min-width: 45em) {
  .u-display-wide {
    display: block;
  }
}

@media (min-width: 45em) {
  .u-display-until-wide {
    display: none;
  }
}
```

**Example JS:**

```js
appendAround({
  selector: '.js-append', // Selector to use for appendAround elements. [Default '.js-append']
  attribute: 'data-set' // Attribute to
});
```

