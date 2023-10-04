# API REST Banco Digital T09
Desafio para criação de um projeto piloto de um banco digital
#
## Funções Disponíveis na API (EndPoints)


* CADASTRO DE CONTAS - (GET)
* ATUALIZAR DADOS DAS CONTAS - (PUT)
* FAZER DEPÓSITOS - (POST)
* SACAR VALORES - (POST)
* TRANSFERÊNCIA BANCÁRIA - (POST)
* CONSULTAR SALDO - (GET)
* CONSULTAR EXTRATO - (GET)
* EXCLUIR CONTA - (DELET)


## Clonando as informações:
* Faça o fork desse repositório para o seu GitHub
* Clone o seu repositório em sua máquina
  
## Parâmetros Iniciais 

* Abra o Terminal e execute os comandos usando a ferramenta NPM 

Iniciar Servidor:

```bash
 npm i
```
Reestartar e Iniciar automaticamente:

```bash
 npm i -D nodemon
```
Executar:

```bash
npm run dev
```

### Bibliotecas

```bash
 npm i express
```
```bash
 npm i date-fns
```

* Crie:
  Arquivo: .gitignore
* Pasta: src
* Dentro da pasta src: crie pasta controladores
  - Nela, serão criados os arquivos controladores

##exemplo

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/ba81cad9-7553-4383-a9b6-1ec9af5355cc)

Na pasta src ficarão os arquivos intermediários, de rota e o index.js

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/133146f5-3778-4e6b-843a-63261050bbaf)


## Retorno dos EndPoints

* CADASTRO DE CONTAS - (GET)
 * Obrigatório:
http://localhost:3000/contas?senha_banco=Cubos123Bank

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/451c40e9-cfd0-4341-9a11-23ebf3dbb025)

* ATUALIZAR DADOS DAS CONTAS - (PUT)

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/2bacd108-cb25-43a0-955b-ef525b05f4ed)


* FAZER DEPÓSITOS - (POST)

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/0f902605-3fb6-4569-93c9-68c0bba8d8fb)

* SACAR VALORES - (POST)

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/15524398-a25b-4bcc-8ad4-f83769e7cb30)

* TRANSFERÊNCIA BANCÁRIA - (POST)

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/2e0a4a9e-57ca-49aa-ab53-fea59e0bfe33)

* CONSULTAR SALDO - (GET)

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/15832d94-9921-4b87-9b9a-193724026777)

* CONSULTAR EXTRATO - (GET)
* Obrigatório: http://localhost:3000/contas/saldo?senha_banco=Cubos123Bank&numero_conta=123&senha=123

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/25c13bf3-e77a-4365-9b49-f14b62eb9268)

* EXCLUIR CONTA - (DELET)

![image](https://github.com/analeticialopes/API_REST_Banco_Digital_T09/assets/141182017/a071a9cd-02e5-43ef-9d4f-32bf062c54ad)







#Usar:

Aplicativo Insomnia
Porta: http://localhost:3000







### Autora

<a href="https://github.com/analeticialopes)">

<img src= "https://avatars.githubusercontent.com/u/141182017?s=400&u=f415f8033420d1d151dba3568a1c313b2433f10b&v=4" width="70px"/>
</a>


