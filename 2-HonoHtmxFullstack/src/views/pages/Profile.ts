import { html } from 'hono/html';

export default function Profile() {
  return html`
    <div class="container">
      <h1>Profile</h1>
      <p>This is a profile page</p>
      <a href="/auth/logout">Logout</a>
    </div>
  `;
}
