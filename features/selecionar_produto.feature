#language: pt

Funcionalidade: Comprar produto

  Esquema do Cenário: Comprar produto com sucesso

    Dado que abro o MyDemoApp

    Quando seleciono o produto na "<posição>"

    Então exibe a pagina com o "<nome_produto>"

    Então exibe o "<preco_produto>"

    Quando adiciono o produto ao carrinho

    Quando abro o carrinho de compras

    Então valido o nome do produto no carrinho "<nome_produto>"

    Então valido a quantidade do produto no carrinho "<quantidade>"

    Então valido o preço do produto no carrinho "<preco_produto>"

    Exemplos:
      | posição | nome_produto              | preco_produto | quantidade |
      | 0       | Sauce Labs Backpack       | $ 29.99       | 1          |
      | 3       | Sauce Labs Backpack (red) | $ 29.99       | 1          |