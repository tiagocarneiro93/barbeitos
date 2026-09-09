One-sentence: modal for a single focused task — enquiry form, brochure request, confirmation.

```jsx
<Dialog open={open} title="Request the portfolio" description="We will send the full project dossier." onClose={close}
        footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button>Send</Button></>}>
  <Field label="Email"><Input type="email" /></Field>
</Dialog>
```
