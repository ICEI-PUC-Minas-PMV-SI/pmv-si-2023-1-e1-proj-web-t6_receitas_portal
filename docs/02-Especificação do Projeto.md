# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Rodrigo Pimentel: tem 25 anos, é formado em Engenharia da Computação, mora em Belo Horizonte-MG. Solteiro, sem filhos, mora sozinho e acabou de conquistar seu próprio apartamento.

Rodrigo não tem muita experiência na cozinha, e para se adaptar a vida nova e independente decide se aventurar pelo mundo da gastronomia e descobrir como fazer novas receitas, e usa o “nome do nosso blog” para atingir seu objetivo.

Ana Luiza Maia: tem 22 anos, cursa Farmácia, mora em São Paulo-SP. Solteira, sem filhos, mora com os pais e sofre de grave intolerância à lactose.

Ana Luiza sempre sofreu com sua intolerância à lactose, já teve algumas experiências ruins indo a lugares que não atendiam esse perfil de cliente, e também tem certa dificuldade em encontrar receitas que respeitem sua restrição alimentar. Logo, utiliza do “nome do nosso blog” para procurar receitas que à satisfaçam, e restaurantes que possam atendê-la.

Luciana Azevedo: tem 52 anos, casada, é formada em administração, trabalha meio período na oficina do marido, tem 2 filhos vegetarianos e mora em Niterói-RJ.

Luciana fica responsável por fazer almoço para seus filhos na maior parte da semana, e costuma ter dificuldades em variar seu cardápio. Percebendo o incômodo dos seus filhos, Luciana procura o “nosso blog” em busca de poder oferecer outras variedades de comidas, que sejam agradáveis ao paladar, e respeitem as restrições de membros da sua família.

Yan Luan Chen: tem 31 anos, solteiro, é formado em gastronomia, trabalha período integral como chef de cozinha em um restaurante Italiano e mora em Curitiba-PR.

Yan percebe que em seu restaurante tem tido um crescente interesse em comidas que não levam ovos. Notando a necessidade de atender um novo público, Yan pesquisa em “nosso blog” receitas de massa sêmolas (que não levam ovo), para que possa englobar também essa restrição em seu cardápio.


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

Jovem inexperiente:

    • Como jovem inexperiente, quero aprender a cozinhar.
    • Como jovem inexperiente, quero ter variedade na cozinha.
    
Pessoa com restrição alimentar:

    • Como uma pessoa com restrição alimentar, quero aprender receitar que respeitem meu bloqueio.
    • Como uma pessoa com restrição alimentar, quero conhecer ambientes que atendam ao meu paladar, respeitando os meus limites.
    
Cozinheiros (profissionais ou familiares):

    • Como cozinheiro, quero aprender uma maior variedade de receitas.
    • Como cozinheiro, quero aprender receitas que respeitem os mais diversos tipos de restrição alimentar.

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário encontre as páginas de receitas desejadas. | ALTA | 
|RF-002| Permitir que o usuário encontre receitas por tipo de restrição.   | ALTA |
|RF-003| Permitir que o usuário encontre receitas por categorias.   | ALTA |
|RF-004| Permitir que o usuário encontre estabelecimentos que os atendam.   | ALTA |
|RF-005| Permitir que o usuário seja capaz de criar um cadastro no site.   | MÉDIA |
|RF-006| Permitir que os usuários cadastrados sejam capazes de incluir suas receitas no site.   | MÉDIA |
|RF-007| Permitir que os usuários consigam comentar em posts públicos.   | MÉDIA |
|RF-008| Inclusão de dados na criação do perfil.   | BAIXA |
|RF-009| Permitir a criação de novas categorias de restrições.   | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser capaz de lidar com o número necessário de usuários sem degradar o desempenho.  | ALTA | 
|RNF-002| Conexão de internet de no mínimo 10MB. |  ALTA |
|RNF-003| O sistema deve ser fácil de usar e entender. |  ALTA |


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
