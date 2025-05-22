# Stock Application

Esta é uma aplicação Spring Boot para gerenciamento de ações (stocks), permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre entidades de ações.

## Estrutura do Projeto

- **com.kmirim.stock.StockApplication**  
  Classe principal que inicializa a aplicação Spring Boot.

- **com.kmirim.stock.entities.Stock**  
  Entidade JPA que representa uma ação, com campos `id`, `name` e `price`.

- **com.kmirim.stock.repositories.StockRepository**  
  Interface (não exibida acima, mas presumida) que estende `JpaRepository` para operações de persistência da entidade `Stock`.

- **com.kmirim.stock.services.StockService**  
  Classe de serviço responsável pela lógica de negócio relacionada à entidade `Stock`. Realiza operações de busca, criação, atualização e remoção de ações utilizando o repositório.

- **com.kmirim.stock.controller.StockController**  
  Controlador REST que expõe endpoints HTTP para manipulação das ações. Permite buscar, criar, atualizar e deletar ações via API.

## Como executar

1. Certifique-se de ter o Java e o Maven instalados.
2. Execute o comando: mvn spring-boot:run
3. A API estará disponível em `http://localhost:8080/api/stock`.

## Endpoints

- `GET /api/stock/{id}`: Busca uma ação pelo ID.
- `POST /api/stock`: Cria uma nova ação.
- `PUT /api/stock/{id}`: Atualiza uma ação existente.
- `DELETE /api/stock/{id}`: Remove uma ação pelo ID.

## Observações

- O projeto utiliza Spring Boot, Spring Data JPA e Jakarta Persistence.
- O banco de dados utilizado pode ser configurado no arquivo `application.properties`.


### `stock/src/main/java/com/kmirim/stock/StockApplication.java`

Classe principal da aplicação Spring Boot. Responsável por inicializar o contexto da aplicação e executar o servidor embutido.

---

### `stock/src/main/java/com/kmirim/stock/entities/Stock.java`

Entidade JPA que representa uma ação (stock) no banco de dados. Possui os campos `id` (identificador), `name` (nome da ação) e `price` (preço da ação). Inclui construtores, getters e setters.

---

### `stock/src/main/java/com/kmirim/stock/controller/StockController.java`

Controlador REST responsável por expor os endpoints HTTP para manipulação das ações. Permite buscar, criar, atualizar e deletar ações via API, delegando as operações para o serviço.

---

### `stock/src/main/java/com/kmirim/stock/services/StockService.java`

Classe de serviço que contém a lógica de negócio relacionada à entidade `Stock`. Realiza operações de busca, criação, atualização e remoção de ações utilizando o repositório.
