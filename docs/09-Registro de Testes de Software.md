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

• Log do teste apresentado via Selenium IDE:
>Running 'navegacao_completa_1'
>18:28:54 1. open on http://127.0.0.1:5500/src/html/login.html OK
>18:28:55 2. setWindowSize on 1288x728 OK
>18:28:55 3. click on id=login OK
>18:28:55 4. type on id=login with value admin OK
>18:28:56 5. type on id=Senha with value admin OK
>18:28:57 6. click on css=.button OK
>18:28:57 7. click on css=button OK
>18:28:57 8. click on css=.logo-menu OK
>18:28:57 9. click on linkText=Vegetarianos OK
>18:28:58 10. click on linkText=Ver Receita OK
>18:28:59 11. click on linkText=Vegetarianos OK
>18:28:59 12. click on css=.col-3:nth-child(2) .card-botao OK
>18:29:00 13. click on css=.logo-menu OK
>18:29:01 14. click on linkText=Vegetarianos OK
>18:29:02 15. click on css=.col-3:nth-child(3) .card-botao OK
>18:29:03 16. click on linkText=Vegetarianos OK
>18:29:04 17. click on css=.col-3:nth-child(4) .card-botao OK
>18:29:04 18. click on linkText=Veganos OK
>18:29:05 19. runScript on window.scrollTo(0,1) OK
>18:29:06 20. click on linkText=Ver Receita OK
>18:29:07 21. click on linkText=Veganos OK
>18:29:07 22. runScript on window.scrollTo(0,332) OK
>18:29:08 23. click on css=.col-3:nth-child(2) .card-botao OK
>18:29:09 24. click on linkText=Veganos OK
>18:29:09 25. runScript on window.scrollTo(0,197) OK
>18:29:10 26. click on css=.col-3:nth-child(3) .card-botao OK
>18:29:11 27. click on linkText=Veganos OK
>18:29:12 28. click on css=.col-3:nth-child(4) .card-botao OK
>18:29:13 29. click on linkText=Veganos OK
>18:29:13 30. click on linkText=ChefSocial OK
>18:29:14 31. click on linkText=Sair OK
>18:29:16 'navegacao_completa_1' completed successfully

## Teste "cadastro_1"

O teste  "cadastro_1" é composto pelos testes funcionais relacionados à página "Cadastro". O teste foi realizado para certificar a capacidade de captura, comparação, salvamento e resposta da estrutura de criação de perfis. 

Erros apresentados: ao realizar o redirecionamento pós-clique para a página de login, é apresentado o erro HTTP ERROR 405, possivelmente por algum erro de integração.

• Log do teste apresentado via Selenium IDE:
>18:49:12 1. open on /src/html/cadastro.html OK
>18:49:12 2. setWindowSize on 1288x728 OK
>18:49:12 3. click on name=usuario OK
>18:49:12 4. type on name=usuario with value Fulano Ciclano OK
>18:49:14 5. type on name=email with value fulanociclano@hotmail.com OK
>18:49:15 6. type on name=Senha with value fulanocilano OK
>18:49:15 7. click on css=button OK
>18:49:15 'cadastro_1' completed successfully

## Teste "login_1"

O teste "login_1" é composto pelos testes funcionais relacionados à página "Login". O teste foi realizado para certificar a capacidade de captura, comparação e resposta da estrutura de autenticação, para usuários existentes e inexistentes. O teste recusou o acesso de uma combinação de login e senha inexistentes e autorizou o ingresso de uma combinação válida e pré-definida para a execução deste teste.

• Log do teste apresentado via Selenium IDE:
>19:10:11 1. open on http://127.0.0.1:5500/src/html/login.html OK
>19:10:11 2. setWindowSize on 1288x728 OK
>19:10:11 3. click on id=login OK
>19:10:11 4. type on id=login with value fulano@hotmail.com OK
>19:10:12 5. type on id=Senha with value 123456 OK
>19:10:13 6. click on css=button OK
>19:10:13 7. assertAlert on usuario ou senha incorretos OK
>19:10:13 8. click on id=login OK
>19:10:14 9. click on id=login OK
>19:10:14 10. doubleClick on id=login OK
>19:10:14 11. click on id=login OK
>19:10:14 12. click on id=login OK
>19:10:14 13. doubleClick on id=login OK
>19:10:14 14. type on id=login with value admin OK
>19:10:15 15. type on id=Senha with value admin OK
>19:10:15 16. click on css=button OK
>19:10:15 'Login' completed successfully