import { html } from 'hono/html';
import Title from "../components/Title";

export default function Landing() {
  return html`
    <div class="container">
      ${Title({ title: 'App'})}
      <p>
        This is a fullstack example using Hono, Htmx, and Alpine. 
        It demonstrates how to create a simple fullstack application using Hono and Htmx.
      </p>
      <p>
        <a href="/auth/login">Login</a>
        <a href="/about" hx-get="/about" hx-trigger="click">About</a>
      </p>
    </div>
  `;
}
