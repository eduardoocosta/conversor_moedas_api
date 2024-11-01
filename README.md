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







# Uso da função Try/Catch

```` Javascript
try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();

        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar a taxa de câmbio');
        }
    }catch (Error){
        console.error("Erro:", error);
        return null;
    }
    
````

## Tecnlogias utilizadas 🔧
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=black)
