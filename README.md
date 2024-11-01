# Conversor de Moedas com consumo de API

# License
>![](https://img.shields.io/badge/license-%20Escola%20Marista%20Ir.%20Ac%C3%A1cio-black) ![](https://img.shields.io/badge/version-0.3-white) 

# Descrição do projeto
Este projeto foi desenvolvido na aula de PWI (Programação Web 1), ministrada pelo professor [Leonardo Rocha](https://github.com/leonardossrocha). Esse projeto é a continuação do anterior [𝑪𝒐𝒏𝒗𝒆𝒓𝒔𝒐𝒓 𝒅𝒆 𝒎𝒐𝒆𝒅𝒂𝒔](https://github.com/eduardoocosta/conversao_de_moedas)
Essa continuação tem o consumo de API do site [ExchangeRate](https://www.exchangerate-api.com/)

## Funcionalidades do website

✔️ Verificação de Campos Obrigatórios;

✔️ Resetar o formulário;

✔️ Preencher Formulário;

✔️ Converter moeda;

✔️ Inserir valor;

✔️ Resultado do valor inserido;

✔️ Definir Taxas de câmbio com o consumo de API;

# Função JS utilizados:🛠️
>* ``async``
>essas funções podem realizar operações que demoram algum tempo, sem bloquear a execução do programa. É uma forma de escrever funções que podem fazer várias coisas ao mesmo tempo, sem travar o programa
>* ``await``
> faz a execução de uma função async pausar, para esperar pelo retorno da Promise , e resume a execução da função async quando o valor da Promise é resolvido.
>* ``fetch``
>permite realizar requisições HTTP assíncronas entre uma aplicação web e recursos externos.
>* ``try``
>O bloco try(tentar) tenta executar um código e caso ocorra uma exceção
>* ``catch``
>o catch(pegar), a captura e faz o tratamento dela. Após uma exceção ter alcançado o bloco catch, o código volta ao fluxo normal de execução para fora do try catch.

~~~ Javascript

try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();
