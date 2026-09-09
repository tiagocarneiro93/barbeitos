One-sentence: divides a grid with 1px brand rules instead of gaps — the system's core structural device.

```jsx
<RuleGrid template="2fr 1fr 1fr">
  <PropertyCard … /><PropertyCard … /><PropertyCard … />
</RuleGrid>

<RuleGrid columns={4}>
  {specs.map(s => <div style={{padding:'22px 20px'}}>…</div>)}
</RuleGrid>
```

Each child is wrapped in its own cell — do not add borders to the children.
