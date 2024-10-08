import { Hono } from 'hono'
import auth from "./routes/auth";
import _app from "./routes/app";
import landing from "./routes/index";

const app = new Hono()

app.route('/', landing)
app.route('/auth', auth)
app.route('/app', _app)

export default app
