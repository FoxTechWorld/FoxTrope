+++
title = 'Desempenho é uma decisão de design'
description = 'Interfaces rápidas começam com escolhas editoriais e técnicas pequenas, não com uma otimização tardia.'
date = 2023-02-15T10:00:00-07:00
draft = false
tags = ['desempenho', 'css']
categories = ['web']
comments = true
+++

Desempenho não é apenas uma pontuação obtida no final do projeto. A quantidade de fontes, a estabilidade
das imagens e o momento em que scripts externos são carregados nascem de decisões feitas durante o
design.

## Uma página previsível

Imagens com dimensões conhecidas evitam deslocamentos inesperados. Scripts não bloqueantes deixam o
conteúdo aparecer primeiro. Uma tipografia local elimina dependência de um serviço externo durante a
renderização inicial.

> A interface mais leve ainda é aquela que não precisa carregar o que não está sendo usado.

No FoxTrope, até os comentários seguem essa regra: o Disqus só é solicitado depois de uma ação explícita
do visitante.
