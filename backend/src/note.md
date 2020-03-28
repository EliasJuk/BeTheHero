
## Método HTTP:
>  **GET:** buscar uma informação do back-end

>  **POST:** Cria uma informação no back-end

>  **PUT:** Alterar uma informação no backend

>  **DELETE:** Deletar uma informação no backend

## Tipo de parãmetros 

>  **Query Params:** Parãmetros nomeados na rota após "?" (filtros, paginação) => req.query

>  **Route Params:** Parãmetros utilizados para identificar recursos => req.params

>  **Request Body:** Corpo da requisição, utilizada para criar ou alterar recursos => req.body

## DataBase
>   **SQL:** SQLite

>   **QueryBuilder:** Knex --> table('users').select('*').where()

## VALIDAÇÃO
    > http://192.168.0.17:3333/incidents?page=1 || http://192.168.0.17:3333/incidents?page=a