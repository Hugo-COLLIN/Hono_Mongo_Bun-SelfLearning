import { html } from 'hono/html';

export default function Login() {
  return html`
    <div class="container">
      <h1>Login</h1>
      <form 
        hx-post="/auth/login"
        hx-trigger="submit"
        hx-target="#login-form"
        hx-swap="outerHTML"
      >
        <div>
          <label for="username">Username</label>
          <input type="text" name="username" id="username" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  `;
}
