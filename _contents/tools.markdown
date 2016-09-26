---
layout: content
title:  "Tools"
permalink: /contents/tools
---

## Sass
Recomendamos o uso de SCSS, pelos seguintes argumentos a partir da comparação.

**SCSS (Sassy CSS)**
```scss
h1 { font-size: $font-size-h1 }

h2 { font-size: $font-size-h2 }

.foo { height: 100px; width: 100px; }

.item {
  box-shadow: 0 2px 0px #dcffa6,
              0 2px 5px #000;
}
```

**Sass**
```sass
h1
  font-size: $font-size-h1

h2
  font-size: $font-size-h2

.foo
  height: 100px
  width: 100px

.item
  box-shadow: 0 2px 0px #dcffa6, 0 2px 5px #000
```

1. Comparando a sintexe do Sass com a do SCSS, o SCSS tem uma capacidade escrita melhor, o que possibilita algumas vantagens, como escrever seletores e atributos na mesma linha. Essa grande capacidade de escrita pode vir a ser um problema porque possibilita escrever um código menos legivel.

2. Integração com código CSS é mais suave porque o código CSS funciona dentro de um código SCSS, diferente do código SASS que a sintaxe é diferente e precisa de alterações para rodar.

3. A sintaxe do SCSS é bem proxima a do CSS, o que torna mais fácil a uma pessoa que já sabe CSS alterar um código SCSS ou criar um código, e entender as diferenças entre as linguagens.

