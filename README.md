# FoxTrope

Tema Hugo escuro e editorial do FoxTechWorld. As decisões de interface estão documentadas em
`DesignRules.md`.

## Requisitos

- Hugo Extended 0.146 ou mais recente;
- Node.js e npm para compilar Tailwind CSS e o JavaScript.

## Desenvolvimento

```sh
npm install
npm run build:css
hugo server
```

Ao alterar classes Tailwind, execute `npm run build:css` novamente ou mantenha `npm run watch:css`
em outro terminal.

## Build de produção

```sh
npm run build
```

## Comentários

O Disqus fica desabilitado até que um shortname seja configurado:

```toml
[params.disqus]
  shortname = 'seu-shortname'
```

Para habilitar comentários em um artigo, use `comments = true` no front matter. O visitante precisa
acionar explicitamente o carregamento do serviço externo.

HTMX está declarado como dependência disponível, mas não é enviado ao navegador enquanto não existir
uma interação que exija comunicação com servidor ou substituição parcial de HTML.
