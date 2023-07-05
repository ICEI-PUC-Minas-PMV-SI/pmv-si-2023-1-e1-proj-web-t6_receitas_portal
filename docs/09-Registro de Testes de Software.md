# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Foram realizados testes funcionais do sistema, de acordo com a lista apresentada em <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>.

Os testes foram realizados via Selenium IDE em 02 de Julho de 2023.

## Análise geral dos Testes de Software

Foram reportados os seguintes erros:
• Ao cadastrar um novo usuário é apresentado o seguinte erro no redirecionamento <a href="https://www.hostgator.com.br/blog/solucionar-erro-405/"> HTTP ERROR 405</a>.

Há pendências de testes relacionadas a algumas funcionalidades do projeto que requerem atenção, como o cadastro/autenticação de usuários, perfil de usuário e armazenamento de receitas. Essas funcionalidades estão diretamente ligadas à integração com JavaScript e Banco de Dados. É necessário realizar uma revisão dessas áreas para garantir seu pleno funcionamento e compatibilidade com os requisitos definidos.

## Teste "navegacao_completa_1"

O teste "navegacao_completa_1" é composto pela maioria dos testes funcionais de navegação (exceto funcionalidades de Cadastro e Perfil de Usuário). O teste foi realizado para certificar a fluidez de navegação do site posterior a autenticação de entrada. Para acessar o site via página de autenticação, foram utilizados login e senha padrões, predefinidos para a execução deste teste.

<a href="test_log_navegacao_completa_1.txt">• Log do teste apresentado via Selenium IDE</a>

## Teste "cadastro_1"

O teste  "cadastro_1" é composto pelos testes funcionais relacionados à página "Cadastro". O teste foi realizado para certificar a capacidade de captura, comparação, salvamento e resposta da estrutura de criação de perfis. 

Erros apresentados: ao realizar o redirecionamento pós-clique para a página de login, é apresentado o erro HTTP ERROR 405, possivelmente por algum erro de integração.

<a href="test_log_cadastro_1.txt">• Log do teste apresentado via Selenium IDE</a>

## Teste "login_1"

O teste "login_1" é composto pelos testes funcionais relacionados à página "Login". O teste foi realizado para certificar a capacidade de captura, comparação e resposta da estrutura de autenticação, para usuários existentes e inexistentes. O teste recusou o acesso de uma combinação de login e senha inexistentes e autorizou o ingresso de uma combinação válida e pré-definida para a execução deste teste.

<a href="test_log_login_1.txt">• Log do teste apresentado via Selenium IDE</a>
