+++
title = 'HTML primeiro: uma base durável para a web'
description = 'Como HTML semântico melhora acessibilidade, SEO e manutenção sem aumentar a complexidade.'
date = 2023-01-15T09:00:00-07:00
draft = false
tags = ['html', 'acessibilidade']
categories = ['desenvolvimento']
comments = true
+++

Uma página não precisa esperar pelo JavaScript para possuir estrutura, significado e navegação. Quando
o HTML descreve corretamente o conteúdo, navegadores, leitores de tela e mecanismos de busca partem da
mesma base.

## Estrutura antes da apresentação

Escolher o elemento correto costuma eliminar código adicional. Uma navegação simples já contém tudo o
que precisa para funcionar:

```html
<nav aria-label="Navegação principal">
  <a href="/artigos/">Artigos</a>
  <a href="/sobre/">Sobre</a>
</nav>
```

CSS pode mudar a composição e Alpine pode melhorar o menu em telas pequenas. Ainda assim, os links
continuam sendo links e permanecem úteis se essas camadas não forem carregadas.

## Melhorias progressivas

A ordem mais robusta é conteúdo, apresentação e comportamento. Cada camada acrescenta capacidade sem
invalidar a anterior. Isso reduz pontos de falha e torna o resultado mais previsível.
