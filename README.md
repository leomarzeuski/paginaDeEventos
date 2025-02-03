# ILOTTO EVENTOS

Uma aplicação web para compra de ingressos e gerenciamento de eventos, desenvolvida com Next.js, Tailwind CSS, Shadcn UI e JSON Server (ou API mockada). O projeto inclui funcionalidades como listagem e filtragem de eventos, compra de ingressos com regras de negócio específicas, autenticação de usuários e páginas de suporte, termos de uso, políticas de privacidade e "Trabalhe Conosco".

## Sumário

- [Instalação e Execução](#instalação-e-execução)
- [Cobertura de Testes](#cobertura-de-testes)
- [Regras de Negócio](#regras-de-negócio)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Melhorias e Otimizações Futuras](#melhorias-e-otimizações-futuras)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Clonando o Repositório

git clone https://github.com/seu-usuario/paginaDeEventos
cd paginaDeEventos

### Instalação das Dependências

npm install

## Executando a Aplicação ja com o backend mockado (json server)

npm run dev
### A aplicação ficará disponível em http://localhost:3000.

## Testes Automatizados com Jest

A aplicação conta com testes automatizados utilizando Jest para garantir a estabilidade e funcionamento correto das funcionalidades principais.

### Executando os Testes

Para rodar todos os testes, utilize o comando:

npm run test

### Ao iniciar os testes, pressione a tecla a para executar todos os testes da aplicação.

## Cobertura de Testes
Os testes incluem verificações para:

Listagem e filtragem de eventos.
Adição e remoção de ingressos no carrinho.
Persistência do carrinho no localStorage.
Autenticação e proteção de rotas.
Cálculo correto de preços, incluindo regras de meia-entrada, VIP e taxas de conveniência.

# Regras de Negócio
Listagem de Eventos:

Exibe os eventos cadastrados e permite filtrar por nome, data, local, preço e categorias.
Se nenhum filtro estiver ativo (busca vazia e sem filtros de preço/local), os 4 eventos com maior número de ingressos vendidos (ticketsSold ≥ 500) são exibidos no topo da listagem e recebem um destaque visual (badge "Mais Vendidos").
Compra de Ingressos:

O usuário pode selecionar o tipo de ingresso (VIP, Pista ou Meia) e a quantidade (máximo 5 ingressos por evento, considerando o total já adicionado).
O preço do ingresso é ajustado conforme o tipo escolhido:
VIP: Preço base x 1.5
Meia: Preço base x 0.5
Pista: Preço base inalterado
É exibido um resumo dos valores (total dos ingressos, taxa de conveniência de 5% e valor final) antes de avançar para o carrinho.
Carrinho de Compras:

O carrinho persiste as informações utilizando localStorage, permitindo que o usuário mantenha os itens mesmo após atualizar a página.
O carrinho permite alterar a quantidade (máximo 5 ingressos por evento), remover itens e limpar todo o carrinho.
O acesso à página de pagamento é protegido: somente usuários logados podem finalizar a compra.
Autenticação:

O sistema permite cadastro e login de usuários.
Os dados do usuário (nome e email) e um token são armazenados em cookies para persistência.
As páginas protegidas (como perfil e pagamento) redirecionam para a página de login se o usuário não estiver autenticado.
Outras Páginas:

Suporte: Página com formulário para dúvidas e comentários.
Termos de Uso e Política de Privacidade: Páginas que detalham as condições de uso do aplicativo e o tratamento dos dados.
Trabalhe Conosco: Página para envio de currículos e apresentação para fazer parte da equipe.
ILOTTO EVENTOS BRASIL: Página institucional com informações sobre a empresa.

## Funcionalidades Implementadas
Listagem e filtragem avançada de eventos.
Carrossel de eventos.
Detalhamento de evento com opção de compra, seleção de ingresso (VIP, Pista ou Meia) e quantidade.
Carrinho de compras com persistência em localStorage.
Paginação de eventos (8 por página) e ordenação especial dos "Mais Vendidos".
Autenticação de usuário (login, cadastro e logout) com persistência via cookies.
Páginas estáticas: Suporte, Termos de Uso, Política de Privacidade, Trabalhe Conosco e ILOTTO EVENTOS BRASIL.
Middleware para proteção de rotas específicas (ex: /payment e /profile).

## Melhorias e Otimizações Futuras
Autenticação:
Utilizar uma solução robusta como NextAuth.js para gerenciamento de sessões e segurança.
Melhorar o armazenamento seguro dos tokens (por exemplo, cookies HttpOnly).
Backend:
Desenvolver endpoints reais para autenticação e gerenciamento de usuários com um banco de dados.
Migrar do JSON Server para uma API real para produção.
## Tecnologias Utilizadas
Frontend:

Next.js (React.js)
Tailwind CSS
Shadcn UI
Lucide Icons
Estado Global:

Context API para gerenciamento do carrinho e autenticação
API Mockada:

JSON Server para simular a API de eventos e usuários
Persistência:

Cookies (usando js-cookie) para autenticação
localStorage para persistência dos itens do carrinho
