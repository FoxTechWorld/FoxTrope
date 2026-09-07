# FoxTrope — Regras de Design

Este documento é a fonte de verdade para as decisões visuais e de experiência do tema FoxTrope.
Toda interface nova deve respeitar estas regras. Quando uma decisão mudar, este arquivo deve ser
atualizado antes ou junto da implementação.

## Implementação do tema

### Ferramentas do lado do cliente

O tema usará as seguintes ferramentas:

- **Tailwind CSS** para estilos, composição visual e design responsivo;
- **HTMX** para interações que dependam de requisições e atualização parcial de HTML;
- **Alpine.js** para estado e comportamento local de componentes no navegador.

### Regras de uso

- O Hugo continuará responsável por gerar todo o conteúdo e a estrutura HTML principal.
- Tailwind CSS deve ser processado durante o build, entregando somente os estilos utilizados pelo tema.
- As páginas devem funcionar sem JavaScript sempre que a funcionalidade permitir.
- HTMX deve ser usado apenas quando houver comunicação com o servidor ou substituição parcial de HTML.
- Alpine.js deve ser usado apenas para estado local e pequenas interações de interface.
- HTMX e Alpine.js não devem implementar a mesma responsabilidade em um componente.
- JavaScript personalizado deve ser a exceção e permanecer pequeno, localizado e justificável.
- Dependências devem ser carregadas somente nas páginas ou componentes que realmente precisem delas,
  quando isso for viável.
- A interface não deve exigir um processo de hidratação nem reproduzir no cliente o roteamento do Hugo.
- Acessibilidade, HTML semântico e melhoria progressiva têm prioridade sobre efeitos visuais.

### Orçamento de desempenho

- Evitar dependências adicionais quando a plataforma web, HTMX ou Alpine.js já resolverem o problema.
- Evitar plugins de terceiros para comportamentos simples.
- Animações devem usar preferencialmente CSS e respeitar `prefers-reduced-motion`.
- Imagens, fontes, estilos e scripts devem ser otimizados para reduzir transferência e bloqueio de renderização.
- Buscar, no percentil 75 de visitas reais, LCP de até `2.5s`, INP de até `200ms` e CLS de até `0.1`.
- Manter o CSS inicial comprimido abaixo de aproximadamente `50KB`; qualquer aumento deve ser medido e
  justificado.
- Medir dependências de terceiros, especialmente o Disqus, separadamente do orçamento do tema.

## Princípios aprovados

1. **Conteúdo primeiro:** o texto e a navegação principal devem existir no HTML gerado pelo Hugo.
2. **HTML leve e semântico:** usar o recurso nativo mais simples da plataforma web antes de adicionar
   CSS, JavaScript, ARIA ou uma dependência.
3. **Melhoria progressiva:** conteúdo, links e ações essenciais devem continuar disponíveis quando o
   JavaScript falhar ou estiver desativado.
4. **SEO estrutural:** rastreabilidade, indexação, metadados e dados estruturados fazem parte de cada
   layout desde sua criação; não são uma otimização posterior.
5. **Acessibilidade por padrão:** buscar conformidade com WCAG 2.2 nível AA em todos os componentes.
6. **Sobriedade visual:** priorizar contraste, tipografia, espaçamento e hierarquia; evitar decoração
   que não ajude a compreender ou navegar pelo conteúdo.

## HTML e padrões web

- Gerar documentos HTML válidos, enxutos e semanticamente corretos.
- Declarar `doctype`, idioma, direção do texto, codificação e `viewport` corretamente.
- Usar landmarks e elementos nativos conforme seu significado, incluindo `header`, `nav`, `main`,
  `article`, `section`, `aside` e `footer`; evitar `div` quando houver um elemento adequado.
- Manter uma hierarquia lógica de títulos e apenas um conteúdo principal por página.
- Usar links para navegação e botões para ações.
- Não adicionar ARIA quando o HTML nativo já fornecer nome, função, estado e comportamento corretos.
- Incluir texto alternativo útil em imagens informativas e alternativa vazia em imagens decorativas.
- Definir largura e altura de mídia para reduzir mudanças de layout.
- Usar carregamento tardio para mídia fora da primeira tela, sem atrasar o principal elemento visual da
  página.
- Carregar scripts com a estratégia menos bloqueante compatível com sua função.
- Evitar marcação, wrappers, atributos, folhas de estilo e scripts que não tenham função concreta.
- Respeitar preferências do sistema, incluindo redução de movimento, esquema de cores e aumento de
  contraste quando aplicável.
- Preservar navegação por teclado, foco visível, ordem de foco coerente e alvos de interação adequados.
- Validar os templates e as páginas geradas com ferramentas de conformidade HTML e acessibilidade.
- Aplicar recomendações W3C que sejam pertinentes ao conteúdo e aos componentes existentes; não
  adicionar recursos apenas para cumprir uma lista sem benefício real.

## SEO

### Rastreabilidade e indexação

- Todo conteúdo público deve ser alcançável por links HTML reais com texto descritivo.
- Gerar `sitemap.xml`, `robots.txt` e feeds RSS válidos usando URLs absolutas e canônicas.
- Não depender de JavaScript para expor o conteúdo principal, metadados ou links de navegação.
- Permitir que ambientes de desenvolvimento e páginas privadas usem `noindex`, sem bloquear por engano
  o site publicado.
- Manter uma URL estável e preferencial para cada conteúdo e declarar `rel="canonical"`.
- Declarar versões alternativas com `hreflang` quando o blog oferecer o mesmo conteúdo em mais de um
  idioma.

### Metadados por página

- Cada página deve ter `title` e descrição próprios, descritivos e derivados do conteúdo.
- Declarar título, descrição, URL canônica, idioma, autor, data de publicação e data de modificação
  quando esses valores existirem.
- Gerar metadados Open Graph e Twitter Cards para compartilhamento, com imagem alternativa apropriada.
- Não inventar autor, datas, imagens ou qualquer metadado ausente.

### Dados estruturados

- Usar JSON-LD baseado em Schema.org e adequado ao tipo real da página.
- Artigos devem poder declarar `BlogPosting`; o site e as páginas institucionais devem usar tipos
  compatíveis com seu conteúdo real.
- Os dados estruturados devem representar informações visíveis na página e passar em validadores de
  resultados enriquecidos.

### Conteúdo e arquitetura

- Priorizar conteúdo útil para pessoas, com título claro, resumo fiel, autoria e datas transparentes.
- Manter URLs legíveis, navegação interna coerente, breadcrumbs quando úteis e páginas de taxonomia
  que acrescentem contexto.
- Imagens relevantes devem ter nomes, texto alternativo, dimensões e formatos apropriados.
- Paginação, arquivos, tags e categorias devem evitar conteúdo duplicado ou páginas vazias indexáveis.

### Verificação

- Antes de uma versão pública, verificar HTML, acessibilidade, sitemap, robots, URLs canônicas, dados
  estruturados, metadados sociais e ausência de links internos quebrados.
- Tratar regressões de rastreabilidade, metadados, semântica e desempenho como falhas do tema.

### Código

- Gerar syntax highlighting com classes do Chroma (`noClasses = false`), sem estilos inline produzidos pelo Hugo.
- Usar a superfície e a paleta do tema nos blocos de código, com contraste funcional entre comentários, palavras-chave, strings, números e identificadores.
- Manter código em bloco com rolagem horizontal, tabulação visual de dois espaços e ligaturas desativadas.
- Diferenciar código inline do texto corrido com superfície, borda e cor de destaque, sem alterar a altura da linha de forma excessiva.

## Identidade visual

### Personalidade e referências

O FoxTrope deve ser sóbrio, direto e contemporâneo. A identidade deve nascer principalmente da
tipografia, da composição e do ritmo do conteúdo, sem tentar representar literalmente o nome do tema.

- Não usar estética temática de raposa ou floresta como decoração recorrente.
- Não usar texturas de papel, glassmorphism, gradientes decorativos ou efeitos chamativos por padrão.
- Evitar excesso de cores, sombras, bordas, ilustrações e formas ornamentais.
- Elementos visuais devem ter uma função clara na hierarquia ou na interação.

### Cores

O tema será escuro, predominantemente monocromático, com fundo preto-carbono e texto em tons de
branco suave. Preto e branco puros devem ser evitados em grandes superfícies para reduzir a dureza
visual sem perder contraste.

Paleta-base inicial:

- **Fundo principal:** `#121212` — preto-carbono;
- **Superfície elevada:** `#191919` — separação discreta quando necessária;
- **Texto principal:** `#F1F1F1` — branco suave;
- **Texto secundário:** `#B8B8B8` — metadados e informações auxiliares;
- **Bordas:** `#303030` — divisores e contornos discretos.

Regras:

- A paleta deve permanecer curta e funcional.
- **Destaque:** `#FF9D4D` — laranja brilhante para links, foco, seleção e ações principais;
- **Destaque hover:** `#FFB067`;
- **Destaque ativo:** `#E9822C`.
- Não depender somente de cor para comunicar estado, seleção, erro ou sucesso.
- Todo par de cores deve atender aos requisitos de contraste aplicáveis da WCAG 2.2 AA.
- Componentes preenchidos com o laranja de destaque devem usar texto carbono, nunca branco, para manter
  contraste suficiente.
- O laranja deve permanecer um acento funcional; não deve ocupar grandes superfícies nem competir com
  o conteúdo.

### Tipografia

Todo o tema usará uma linguagem tipográfica clássica e coerente, exclusivamente **sem serifa**.
**Source Sans 3** será a família principal. **Atkinson Hyperlegible Next** será a segunda opção da
mesma categoria, seguida pelas fontes sem serifa nativas do sistema.

Pilha principal:

```css
font-family:
  "Source Sans 3",
  "Atkinson Hyperlegible Next",
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Regras:

- Source Sans 3 deve ser hospedada localmente pelo tema e carregada apenas nos pesos e estilos usados.
- Atkinson Hyperlegible Next deve ser usada quando Source Sans 3 não estiver disponível ou como futura
  alternativa selecionável de acessibilidade.
- Títulos, corpo, navegação, metadados, legendas e controles devem seguir essa mesma pilha.
- Não misturar famílias serifadas e sem serifa na interface ou no conteúdo editorial.
- A cadeia de fallback deve permanecer sem serifa para evitar mudanças bruscas de métricas, quebras de
  linha e identidade durante o carregamento.
- Hierarquia visual deve ser criada com tamanho, peso, altura de linha e espaçamento, não pela troca de
  categoria tipográfica.
- Texto corrido não deve ser justificado.
- O tamanho-base inicial será `1rem`, com altura de linha próxima de `1.65` e largura de leitura
  máxima próxima de `70ch`, sujeitos a ajustes após testes reais de conteúdo.

#### Escala tipográfica editorial

| Elemento | Tamanho inicial | Peso | Altura de linha |
| --- | --- | --- | --- |
| Título principal | `2.25rem` / `3.5rem` | `700` | `1.08` |
| Título do artigo | `2rem` / `3.25rem` | `700` | `1.1` |
| `h2` | `1.625rem` / `2rem` | `650` | `1.2` |
| `h3` | `1.25rem` / `1.5rem` | `600` | `1.3` |
| Resumo introdutório | `1.125rem` | `400` | `1.6` |
| Corpo do artigo | `1rem` | `400` | `1.65` |
| Metadados | `0.875rem` | `500` | `1.5` |

- Toda a escala visual deve usar `rem`. Exceções semânticas são `ch` para comprimento de linha, porcentagens para estrutura e `1px` para bordas.
- Tamanhos de destaque devem usar os mesmos valores em `rem`, com uma única progressão no breakpoint de desktop.
- Evitar pesos ultraleves; usar principalmente `400`, `500`, `600` e `700`.
- Títulos devem permanecer alinhados à esquerda.
- Evitar maiúsculas em blocos de texto e não usar caixa alta como única forma de hierarquia.

### Ícones e ilustrações

- Usar SVG local, inline ou em sprite; não carregar uma biblioteca completa para poucos ícones.
- Manter ícones normalmente entre `1.25rem` e `1.5rem`, com peso visual consistente.
- Ícones decorativos devem ser ignorados por tecnologias assistivas.
- Controles com apenas um ícone devem possuir nome acessível; ações pouco familiares também devem ter
  rótulo visível.
- Ilustrações são opcionais e nunca devem ser necessárias para compreender ou navegar pelo conteúdo.

## Layout

### Grade e largura do conteúdo

- Usar um container geral com largura máxima de `95rch`, compartilhado por cabeçalho, conteúdo e rodapé para manter o mesmo eixo visual independentemente do tamanho de fonte interno.
- Manter artigos em uma coluna de aproximadamente `70ch`.
- Alinhar a coluna de leitura dos artigos ao eixo esquerdo compartilhado pelo cabeçalho, conteúdo e rodapé.
- Alinhar também as páginas internas de arquivo, taxonomia, termo e erro ao mesmo eixo, limitando-as a `56rem`.
- Manter a listagem da página inicial em toda a largura do container de `95rch` e no mesmo eixo, sem repetir título, autoria ou descrição introdutória do site.
- Permitir uma largura intermediária próxima de `56rem` para mídia, tabelas e componentes que precisem
  de mais espaço.
- Usar margens laterais entre `1rem` e `2rem`, seguindo os breakpoints do layout.
- Exibir coluna auxiliar somente quando houver espaço real; o conteúdo principal nunca deve ser
  comprimido para acomodá-la.

### Espaçamento

O ritmo vertical será baseado na escala `0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6rem`.

Valores editoriais iniciais:

- entre parágrafos: `1.5rem`;
- antes de `h2`: `4rem`;
- depois de `h2`: `1.25rem`;
- antes de `h3`: `2.75rem`;
- entre título e resumo: `1.5rem`;
- entre o cabeçalho do artigo e seu conteúdo: `3rem`.

- Espaçamentos fora da escala precisam ter uma justificativa ligada ao componente.
- A proximidade deve comunicar relação: menos espaço entre título e conteúdo relacionado, mais espaço
  entre seções distintas.

### Bordas, raios e sombras

- Usar bordas de `1px` na cor `#303030`.
- Usar raio padrão de `0.25rem` e, quando necessário em controles maiores, no máximo `0.375rem`.
- Não usar sombras por padrão.
- Comunicar agrupamento e elevação principalmente por espaçamento, borda ou diferença de superfície.

### Responsividade

- Implementar de forma mobile-first e testar desde `20rem` de largura.
- Não escolher breakpoints por modelos de dispositivo; introduzi-los quando o conteúdo exigir.
- Permitir reflow em uma única coluna sem perda de conteúdo ou funcionalidade.
- Não produzir rolagem horizontal na página; tabelas e código podem rolar dentro de seus contêineres.
- Garantir que imagens, vídeos, títulos, URLs e palavras longas não ultrapassem o viewport.
- Manter a ordem visual igual à ordem do documento.
- Garantir funcionamento com zoom de texto em `200%` e zoom de página equivalente a `400%` quando
  aplicável.

## Componentes

### Cabeçalho e navegação

- O cabeçalho será estático, compacto, opaco e integrado ao fluxo da página.
- Usar logotipo textual e navegação principal com rótulos visíveis.
- Não usar transparência, efeito de vidro ou cabeçalho fixo por padrão.
- Em telas estreitas, recolher a navegação em um controle de menu claramente identificado.
- O menu deve funcionar por teclado, administrar foco corretamente e fechar com `Escape`.
- A busca deve possuir rótulo acessível e não depender somente de um ícone.

### Cards e listas de posts

- Usar listas editoriais sem caixas, elevação ou sombras.
- Separar itens com espaço e divisores sutis.
- Priorizar título, seguido por resumo e metadados; imagem é opcional.
- Não tornar uma grande área invisível em um único link; título e ações devem ter destinos claros.
- Manter títulos completos sempre que possível e não exigir imagens de capa para preservar o layout.
- Usar paginação com links HTML convencionais, mesmo quando HTMX oferecer melhoria progressiva.

### Conteúdo dos artigos

- Organizar o cabeçalho na ordem: contexto ou categoria, título, resumo, autoria, data e tempo estimado
  de leitura.
- Exibir somente metadados existentes; nenhum campo deve ser inventado para preencher a composição.
- Limitar resumos introdutórios a duas ou três linhas quando possível, sem truncar informação essencial.
- Manter o corpo próximo de `70ch` e alinhado à esquerda.
- Separar parágrafos por espaço, sem recuo na primeira linha.
- Usar links sublinhados no corpo do artigo.
- Usar negrito e itálico com moderação e finalidade semântica.
- Manter listas alinhadas ao fluxo do texto e com espaçamento suficiente entre itens complexos.
- Evitar centralização, exceto em mensagens curtas ou composições em que ela tenha função clara.
- Não transformar cada seção, parágrafo ou fragmento editorial em um card.
- Imagem de abertura é opcional e deve aparecer após os metadados quando existir.

### Comentários

- O FoxTechWorld usará **Disqus** como sistema de comentários nos artigos.
- Por padrão, os comentários aparecem automaticamente ao final do artigo quando `comments = true` no
  front matter. O shortcode `{{</* disqus */>}}` permite inserir o mesmo embed manualmente em qualquer
  conteúdo (por exemplo, uma página que não use o layout de artigo), reaproveitando as mesmas regras da
  exceção abaixo.
- Comentários devem aparecer depois do conteúdo editorial e não interromper a leitura do artigo.
- A seção deve possuir título visível e uma mensagem clara enquanto o serviço não estiver carregado.
- O layout deve reservar ou administrar o espaço do embed para evitar mudanças bruscas na página.
- A aparência ao redor do embed deve seguir a paleta do tema, sem tentar alterar internamente a interface
  de terceiros por soluções frágeis.

### Conteúdo técnico

- Gerar destaque de sintaxe estaticamente com o Hugo, sem biblioteca de highlighting no navegador.
- Usar uma paleta de código compatível com o fundo carbono e com contraste verificado.
- Diferenciar código inline sem prejudicar a altura de linha do parágrafo.
- Permitir linguagem e nome de arquivo como informações opcionais, nunca inventadas.
- Tratar o botão de copiar como melhoria progressiva e anunciar o resultado de forma acessível.
- Manter espaços e quebras significativos; linhas longas devem rolar dentro do bloco de código.
- Tabelas devem usar cabeçalhos e captions semânticos quando disponíveis e possuir rolagem localizada
  quando não puderem reflowar.
- Citações e callouts devem permanecer sóbrios. Callouts ficam limitados inicialmente a nota,
  informação, atenção e perigo, sempre com rótulo textual além da cor.

### Imagens e mídia

- Gerar variantes responsivas e formatos modernos pelo pipeline do Hugo quando a fonte permitir.
- Informar dimensões intrínsecas e preservar a proporção para evitar layout shift.
- Não aplicar lazy loading à imagem responsável pelo LCP; mídia abaixo da primeira tela pode ser tardia.
- Legendas e créditos devem estar semanticamente ligados à mídia.
- Imagens decorativas não devem duplicar informação nem receber descrição inútil.
- Vídeo e áudio devem possuir alternativas acessíveis adequadas ao conteúdo publicado.

### Páginas e estados especiais

- A página 404 deve explicar o erro e oferecer retorno à página inicial e acesso à busca, quando existir.
- Busca, filtros e taxonomias devem possuir estado vazio compreensível.
- Tags e categorias podem ter descrição editorial e não devem existir apenas para repetir listas sem
  contexto.
- Arquivos cronológicos e páginas de autor devem usar a mesma lista editorial dos demais índices.
- Paginação deve preservar URLs, histórico do navegador e links rastreáveis.
- O feed RSS deve ser detectável pelo documento e acessível na navegação ou no rodapé.

### Rodapé

- Manter o rodapé compacto e separado por borda ou espaço.
- Permitir nome do site, copyright, RSS, política de privacidade, contato e redes configuradas.
- Não duplicar toda a navegação nem adicionar grandes áreas promocionais por padrão.

### Formulários e controles

- Buscar área interativa de pelo menos `2.75rem` nos controles principais.
- Usar rótulos sempre visíveis; placeholder nunca substitui label.
- Preservar controles HTML nativos sempre que cumprirem a função.
- Associar instruções e erros aos respectivos campos e explicar como corrigir o problema.
- Não submeter formulários nem mudar de contexto apenas por foco ou alteração de seleção.

## Interação e movimento

### Estados interativos

- Links editoriais devem usar laranja de destaque e sublinhado persistente.
- Hover pode clarear o destaque, mas não deve ser a única indicação de interação.
- Foco por teclado deve usar contorno de pelo menos `0.125rem` em laranja, com afastamento suficiente.
- Estados ativo, visitado, desabilitado e carregando devem continuar distinguíveis sem depender apenas
  de cor.
- Carregamento, sucesso e erro devem possuir texto compreensível; spinner e ícone são complementares.

### Animações e transições

- Usar duração padrão de `150ms`, normalmente dentro do intervalo de `120–180ms`.
- Preferir transições de cor, opacidade e pequenos deslocamentos por `transform`.
- Não usar parallax, rolagem forçada ou animação automática durante a leitura.
- Remover movimentos não essenciais quando `prefers-reduced-motion: reduce` estiver ativo.

## Acessibilidade

- Adicionar um skip link como primeiro controle focalizável.
- Garantir navegação integral por teclado, foco visível e ordem de foco previsível.
- Não permitir que menus, overlays ou outros elementos ocultem permanentemente o item em foco.
- Usar regiões `aria-live` somente para mensagens dinâmicas relevantes.
- Restaurar o foco ao fechar menus, diálogos e componentes equivalentes.
- Testar contraste de texto, controles, ícones, bordas funcionais e estados interativos.
- Garantir que ampliação e reflow não removam conteúdo nem funcionalidade.
- Imagens de texto são proibidas, exceto logotipos ou casos em que a representação seja essencial.

## Tema claro e escuro

- A primeira versão do FoxTrope será exclusivamente escura.
- Declarar o esquema escuro ao navegador e estilizar controles nativos de forma compatível.
- Não exibir seletor de tema enquanto não houver um tema claro completo e testado.
- Um futuro tema claro deverá possuir paleta própria e equivalente semântica; não poderá ser produzido
  por simples inversão automática de cores.

## Conteúdo e tom de voz

- Usar linguagem clara, direta, respeitosa e informativa.
- Evitar linguagem corporativa, jargão desnecessário e humor em mensagens de erro importantes.
- Rótulos e ações devem ser curtos, previsíveis e coerentes em todas as páginas.
- Mensagens de erro devem explicar o problema e, quando possível, a forma de resolvê-lo.
- Datas e números devem respeitar o idioma configurado no Hugo.
- Nenhum texto fixo do tema deve impedir internacionalização futura.

## Exceções

Qualquer exceção deve ser registrada aqui com sua justificativa e o componente ao qual se aplica.

### Disqus

O Disqus é a exceção aprovada às regras que restringem dependências, scripts e conteúdo de terceiros.
Ele é necessário para oferecer comentários no FoxTechWorld, mas deve permanecer isolado do restante da
arquitetura.

Regras da exceção:

- Carregar o embed somente em páginas individuais de conteúdo que tenham comentários habilitados.
- Não carregar scripts de comentários na página inicial, listagens, taxonomias ou páginas sem seção de
  comentários.
- O `shortname` deve vir da configuração do Hugo e nunca ficar acoplado ao layout.
- Definir explicitamente para cada thread a URL canônica e um identificador único e estável, evitando
  discussões duplicadas quando títulos ou URLs mudarem.
- Carregar o script de forma não bloqueante e tardia, preferencialmente após ação do visitante ou de
  acordo com a política de consentimento adotada pelo site.
- Antes do carregamento, informar que os comentários são fornecidos por um serviço externo.
- Oferecer uma alternativa em `noscript` que explique a necessidade de JavaScript.
- A política de privacidade do site deve informar o uso do Disqus e ser acessível antes de ativá-lo.
- O conteúdo principal, os metadados e a navegação nunca podem depender do Disqus.
- Uma falha ou bloqueio do Disqus não pode quebrar o layout nem impedir o acesso ao artigo.
- A integração deve ser testada quanto a desempenho, privacidade, contraste, teclado e responsividade.
