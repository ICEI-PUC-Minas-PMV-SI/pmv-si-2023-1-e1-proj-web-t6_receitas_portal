# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

| Página | Cenário de Teste |
|------|-----------------------------------------|
| Cadastro | Ao entrar na página é esperado o carragamento da caixa de cadastro. | 
| Cadastro | Ao cliclar em "Fazer Login", é esperado que o usuário seja direcionado a página "Fazer Login", contendo "E-mail", "Senha" e botão "Entrar" funcionais. |
| Cadastro | Ao digitar sobre os campos "Nome", "E-mail", "Senha" e clicar no botão "Cadastrar" é esperado que o campos aceitem a entrada de informações do usuário e verifiquem a existência ou não daquele cadastro sugerido. Dessa forma, permitindo o avanço à página "Fazer Login", ou recusando o cadastro no sistema. 
| Fazer Login | Ao entrar na página é esperado o carregamento da caixa de login, contendo os campos "E-mail" e "Senha" e o botão "Entrar". |
| Fazer Login | Ao clicar em "Cadastre-se", é esperado que o usuário seja direcionado a página "Cadastro", contendo "Nome", "E-mail", "Senha" e botão "Cadastrar" funcionais. |
| Fazer Login | Ao digitar sobre os campos "E-mail" e "Senha" e clicar no botão "Entrar" é esperando que os campos aceitem a entrada de informações do usuário e verifiquem a existência ou não daquele cadastro sugerido. Dessa forma, permitindo ingresso no sistema e direcinamento para página "Home", ou recusando ingresso no sistema. |
| Home | Ao entrar na página é esperado o carramengo do cabeçalho (com barra de pesquisa e botões "Minha Conta" e "Sair"), menu lateral expansivo (com categorias de receitas) e lista de últimas receitas. |
| Home | Ao passar o cursor sobre o menu lateral expansivo é esperada sua expansão, exibindo categorias de receitas clicáveis. |
| Home | Ao clicar em qualquer botão "Ver Receita" é esperado o direcionamento para a página da receita específica em questão. |
| Home | Ao digitar sobre a barra de pesquisa, é esperado que os valores digitados sejam recebidos e ao pressionar "Enter" é esperado o retorno da pesquisa. |
| Home | Ao clicar sobre o botão "Minha conta" é esperado o direcionamento para a página "Perfil de Usuário". |
| Home | Ao clicar sobre o botão "Sair" é esperado o encerramento da sessão de navegação do usuário e o respectivo retorno para a tela inicial. |
| Receitas | Ao entrar na página é esperado o carregamento e visualização de todo o corpo da receita específica, incluindo o título, imagem, e textos. |
| Perfil de Usuário | Ao entrar na página é esperado o carregamento e visualização de caixas de texto para realizar a mudança do nome de usuário no campo "Nome" e a deleção da conta do usuário. |

## Ferramentas de Testes (Opcional)

A ferramenta Selenium IDE foi utilizada para realizar os testes de software automatizados. 