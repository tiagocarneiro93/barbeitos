One-sentence: the property/service container — square, borderless inside a RuleGrid, serif title over mono metadata.

```jsx
<RuleGrid template="2fr 1fr 1fr">
  <Card interactive as="a" href="#"
    media={<div style={{height:330}}><image-slot id="p1" shape="rect"></image-slot></div>}
    eyebrow="Cascais · Em exclusivo" title="Quinta da Marinha 14"
    meta="4 suítes · 420 m² · piscina"
    footer={<><span style={{font:'var(--type-heading-3)'}}>€3.850.000</span><Meta tone="accent">Detalhe →</Meta></>} />
</RuleGrid>
```

Never give a card a radius, a shadow, or a coloured left border.
