# deckgo-ie-color-actions

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute | Description | Type                  | Default     |
| ----------- | --------- | ----------- | --------------------- | ----------- |
| `color`     | `color`   |             | `string`              | `undefined` |
| `mobile`    | `mobile`  |             | `boolean`             | `undefined` |
| `palette`   | --        |             | `DeckdeckgoPalette[]` | `undefined` |
| `selection` | --        |             | `Selection`           | `undefined` |

## Events

| Event           | Description | Type                |
| --------------- | ----------- | ------------------- |
| `colorModified` |             | `CustomEvent<void>` |

## Dependencies

### Used by

- [deckgo-inline-editor](../../inline-editor)

### Depends on

- deckgo-color

### Graph

```mermaid
graph TD;
  deckgo-ie-color-actions --> deckgo-color
  deckgo-inline-editor --> deckgo-ie-color-actions
  style deckgo-ie-color-actions fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
