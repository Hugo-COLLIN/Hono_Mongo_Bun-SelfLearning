import { Hono } from 'hono';
import app from './app/index';
import Layout from "../views/Layout";
import Landing from "../views/pages/Landing";

const hono = new Hono();

hono.get('/', (c) => {
  return c.html(Layout({ title: 'Home', content: Landing() }));
});

hono.route('/app', app)

export default hono;
