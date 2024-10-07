import { Hono } from 'hono'
import auth from "./routes/auth";
import _app from "./routes/app";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/auth', auth)
app.route('/app', _app)

export default app
