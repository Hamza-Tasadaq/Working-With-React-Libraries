import { createServer } from "miragejs"
import todos from "../json/todo.json";

export function makeServer() {
    let server = createServer({
        routes() {
            this.namespace = "api"

            this.get("/todos", () => {
                return todos;
            })
            this.post("/addTodos", (schema, res) => {
                const newTodo = JSON.parse(res.requestBody)
                todos.unshift(newTodo);
                console.log(todos)
            })
        },
    })

    return server
}