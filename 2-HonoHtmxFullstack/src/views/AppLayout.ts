import { html } from 'hono/html';

type HtmlEscapedString = string; // HtmlEscapedString replacement as it's not exposed by hono/html

export default function Layout({ title, content } : { title: string, content: (HtmlEscapedString | Promise<HtmlEscapedString>) }) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <script src="https://unpkg.com/htmx.org@2.0.3" integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq" crossorigin="anonymous"></script>
      <script src="//unpkg.com/alpinejs" defer></script>
      <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    </head>
    <body>
    <nav class="navbar">
      <a href="/">Dashboard</a>
      <a href="/profile">User profile</a>
      <a href="/auth/logout">Logout</a>
    </nav>
    ${content}
    </body>
    </html>
  `;
}
