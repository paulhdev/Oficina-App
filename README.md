# _Oficina App_

## Como rodar a aplicação:

### Primeiro você deve instalar o seguinte

1. Instalar Node JS de preferência LTS
2. Instalar o React Native CLI
3. Instalar o JDK 8
4. Instalar o SDK do Android e configurar o PATH em sua máquina

### Para rodar o projeto

#### Fazendo clone ou baixando o repositório

1. Para clonar o repositório em sua máquina, instale o Git em seu computador, vá ao seu terminal e dê o seguinte comando: _git clone https://github.com/PauloRev/Oficina-App_
2. Para baixar o Repositório apenas click no botão verde onde tem escrito: _clone or download_ e clique em _Download Zip_

#### Rodando a aplicação

1. Instale algum emulador Android como Genymoution, use o emulador do próprio Android Studio _ou então uma opção um pouco mais fácil:_ instale o dbServices, ative a depuração USB no modo desenvolvedor do seu despositivo móvel e plugue no seu computador ou notebook
2. Acesse a pasta criada do clone do repositório ou do download(depois de extraido)
3. No seu terminal aberto no caminho da pasta rode o seguinte comando para instalar as dependências: _npm install_
4. Dentro da página rode o seguinte comando para iniciar o App em seu dispositivo: _react-native run-android_ ou _react-native run-ios_. _OBS: Se você estiver usando o emulador primeiro o inicie para poder rodar os comandos_
5. O aplicativo será iniciado

## Como o App funciona

#### O App lista o orçamento de uma oficina onde mostra de inicio o nome do cliente, nome do vendedor e o valor do orçamento, ao dar um clique sobre o botão descrição um modal será aberto contendo o nome do cliente e o serviço realizado.

### O que foi usado no desenvolvimento desse App

1. Primeiro de tudo o React Native
2. Axios para consumir a API
3. Shimmer PlaceHolder para fazer a animação de loading enquanto a requisião está sendo realizada.
4. React-native-vector-icons para o uso de icones na aplicação