One-sentence: the action control — terracotta for the one primary action per view, hairline outline for everything else.

```jsx
<Button>Ver empreendimentos</Button>                       // terracotta → navy
<Button variant="secondary">Marcar visita</Button>          // outline on paper
<Button variant="outline-inverse">Ver trabalhos</Button>    // outline on navy/graphite
<Button fullWidth>Pedir acesso</Button>
```

- Labels uppercase, verb-first, PT-PT on the public site: VER EMPREENDIMENTOS, PEDIR ORÇAMENTO, MARCAR VISITA.
- Never two terracotta buttons side by side — pair primary with `secondary` or `outline-inverse`.
- No radius, no shadow, no scale on press.
