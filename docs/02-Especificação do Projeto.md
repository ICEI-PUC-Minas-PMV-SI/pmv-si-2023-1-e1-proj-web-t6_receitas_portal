# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

• Rodrigo Pimentel tem 32 anos, é formado em Sistemas de Informação. Casado, com um filho, mora com a família e acabou de conquistar seu próprio apartamento. Sua mulher trabalha fora e ele não tem muita experiência na cozinha. Para se adaptar ao estilo de vida recente decide buscar receitas rápidas e saudáveis na internet que se adequem ao cotidiano.

• Ana Luiza Maia tem 22 anos, é cursa Farmácia. Solteira, sem filhos, mora com os pais e sofre de grave intolerância à lactose. Ela está à procura de um portal na internet para encontrar receitas que atendam suas necessidades de saúde, além de compartilhar suas experiências com outras pessoas em situação semelhante.

• Luciana Azevedo tem 52 anos, não possui curso superior. Casada, com dois filhos, mora com o marido alérgico à mariscos e os filhos no litoral. Ela é a responsável pela preparação das refeições diárias da família e costuma ter dificuldades em variar o cardápio, pois moram próximo ao mar e o marido é alérgico à mariscos. Está em busca de receitas na internet que ajudem a ter mais opções no dia dia sem que provoquem alergia no seu marido.

• Luiz Silva tem 72 anos, é aposentado. Viúvo, tem três filhos e dois netos, mora sozinho, é vegano e acabou de adquirir um pequeno sítio. Ele cozinha suas refeições com as hortalicas e legumes de sua pequena plantação. Recentemente, seu neto o ensinou a buscar receitas de saladas na internet, para que ele aproveite ao máximo a variedade disponível em sua horta.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

Adulto inexperiente:

    • Como adulto inexperiente, quero aprender a cozinhar, para realizar minhas refeições em casa.
    • Como adulto inexperiente, quero ter acesso a receitas variadas, para cozinhar de maneira rápida e saudável.
    
Jovem adulto com restrição alimentar:

    • Como um jovem adulto com restrição alimentar, quero aprender receitas que respeitem minhas necessidades pessoais, para que eu não tenha mais problemas de saúde decorrentes da alimentação.
    • Como uma pessoa com restrição alimentar, quero ter acesso a receitas variadas, para que eu coma diferentes preparos.
    
Cozinheira amadora:

    • Como cozinheira amadora, quero aprender uma maior variedade de receitas, para que minha família faça refeições diferentes todos os dias.
    • Como cozinheira amadora, quero ter acesso a receitas que não englobem mariscos, para que meu marido não tenha uma reação alérgica ao comer.

Idoso vegano:

    • Como idoso vegano, quero aprender uma maior variedade de receitas, para que eu aproveite ao máximo as hortaliças e vegetais da minha pequena plantação.
    • Como idoso vegano, quero aprender a utilizar corretamente a ferramenta de pesquisa de receitas, para que eu descubra novos pratos e compartilhe minhas experiências.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário encontre as páginas de receitas desejadas. | ALTA | 
|RF-002| Permitir que o usuário encontre receitas por tipo de restrição.   | ALTA |
|RF-003| Permitir que o usuário encontre receitas por categorias.   | ALTA |
|RF-004| Permitir que o usuário encontre estabelecimentos que os atendam.   | ALTA |
|RF-005| Permitir que o usuário seja capaz de criar e utilizar um cadastro no site.   | MÉDIA |
|RF-006| Permitir que os usuários cadastrados sejam capazes de incluir suas receitas no site.   | MÉDIA |
|RF-007| Permitir que os usuários consigam comentar em posts públicos.   | MÉDIA |
|RF-008| Permite que o usuário realize a inclusão de dados no seu perfil.   | BAIXA |
|RF-009| Permitir a criação de novas categorias de restrições.   | BAIXA |

Observações: 
• Os requisitos funcionais RF-002, RF-006, RF-007, RF-009 não serão entregues nessa etapa por falta de prazo hábil para entrega.
• O requisito funcional RF-004 será removido do projeto por opção estatégica da equipe, em relação às funções apresentadas pelo sistema.

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser capaz de lidar com o número necessário de usuários sem degradar o desempenho.  | ALTA |
|RNF-002| O sistema deve ser fácil de usar e entender. | ALTA |
|RNF-003| Conexão de internet de no mínimo 10MB. | MÉDIA |