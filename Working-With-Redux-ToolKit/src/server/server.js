import { createServer } from 'miragejs'

export function makeServer() {
    let server = createServer({
        routes() {
            this.namespace = "api"
            this.get("/randomnumber", () => {
                return (Math.floor(Math.random() * 10))
            })
        },
    })
    return server
}