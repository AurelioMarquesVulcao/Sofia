# IA SofiA

### Por não encontrarmos um produto configurável com as características que julgamos necessárias para o **Olist**, desenvolvemos do zero nossa própia IA. A **SofiA**

**SofiA** tem o poder de analisar as perguntas feitas por clientes dos Marketplaces. Nossa robôzinha verifica se as respostas estão na descrição do produto e responde automaticamente.

Conforme **SofiA** aprende, ela consegue filtrar mais tipos de respostas. **SofiA** é muito confiante mas você pode controlar esse grau de confiança.

* Pergunta: laranja é fruta?
* bot_sem_aprendizado: O seu cachorro é laranja.

**SofiA** por sua vez...

* Pergunta: laranja é fruta?
* **SofiA**: Não tenho essa resposta em meu banco de dados.

E envia a pergunta para o vendedor parceiro **Olist**.

A proxima vez que alguém perguntar...

* Pergunta: laranja é fruta?
* **SofiA**: Olá, tudo bem? Sim, laranja é uma fruta. Espero que tenha ajudado, tenha um ótimo dia.

**SofiA** aprende com os lojistas e pode ter suas respostas refinadas pelo **Olist**, que passará a se concentrar apenas nas respostas que realmente precisam ser personalizadas. 

Integravél ao atual sistema do **Olist**, gerando baixo impacto no fluxo de trabalho, pois usa os dados ja existentes para aprender e forma um ciclo de aprendizado constante, pode integrar-se a qualquer banco de dados existente ou operar com seus próprios bancos de dados para compor seu aprendizado (recomendado, pois assim separamos o cérebro de nossa IA e mantemos toda a sua expertise privada e segura).

Hoje a integêcia de **SofiA** é feita por 2 aplicações em GO e armazenanda no DynamoDB, assim temos dados multiprocessados que suportam até 20 milhões de solicitações por segundo. Essa inteligência está armazenada aqui:

https://github.com/yagobarros/olist-turby-service-go/tree/07911a0a814cefe14eafe27c1cc5977af6ffb876

Por ser projetada para ser social e não restritiva pode ser escalonada e vendida como um produto próprio pelo **Olist** para outras plataformas de vendas que precisam tratar um número massivo de perguntas.

## Usando a IA SofiA

#### Foi utilizado a requisição GET para simplificar o uso e o teste de SofiA por qualquer pessoa não importando o nível de conhecimento técnico. Dessa forma qualquer um com o link: https://sofiaia.herokuapp.com/ , pode acessar os produtos para realizar testes, acrescentando as perguntas e o ID do próprio produto. conforme este exemplo: "https://sofiaia.herokuapp.com + /1/ + qual a cor da bolsa ?".

## Exemplos de como a sofia deverá funcionar:

* Perguntando se a bolsa é Louis Vuitton

![teste01](https://github.com/AurelioMarquesVulcao/Sofia/blob/master/src/asset/images/teste%2001.PNG?raw=true)

* Perguntando qual é a cor do produto

![teste02](https://github.com/AurelioMarquesVulcao/Sofia/blob/master/src/asset/images/teste%2002.PNG?raw=true)

* Perguntando se o vendedor tem o produto em estoque

![teste03](https://github.com/AurelioMarquesVulcao/Sofia/blob/master/src/asset/images/teste%2003.PNG?raw=true)

* No navegador web
![teste04](https://github.com/AurelioMarquesVulcao/Sofia/blob/master/src/asset/images/teste04.PNG?raw=true)

## Executando o código

### Baixe o códico no github como arquivo zip e o extraia numa pasta de sua escolha

![executar01](https://github.com/AurelioMarquesVulcao/Sofia/blob/master/src/asset/images/executar01.PNG?raw=true)

### Abra a pasta onde colocou o seu código, pegue o caminho para a pasta e no seu terminal digite:

``cd c:\caminho da pata\pasta onde está o código``

### os seguintes códigos:

* código para baixar dependências.
    
    ``yarn install``

* código para rodar SofiA na porta 3000.
    
    ``yarn dev``

Se sua porta 3000 estiver ocupada provavelmente você terá a opção de mudar no momento que o servidor subir caso não. Vá ao arquivo ".env" e mude a porta para a porta desejada, ``SERVER_PORT=3000``  para  ``SERVER_PORT=1234``  ou qualquer outra porta que queira usar.

> Ps: Um Aviso Importante---Não tenho **Node** nem **Yanr** instalados na minha máquina sou dev Pythônico.
>
> Não se desespere gafanhoto.
>
> No seu terminal execute o código 
>
> ``docker-compose up -d``
>
> E deixe a mágica do docker acontecer... Sua aplicação vai estar rodando toda direitinha na porta 3000. Afinal somos todos filhos do **"C"** e não podemos brigar entre nós.