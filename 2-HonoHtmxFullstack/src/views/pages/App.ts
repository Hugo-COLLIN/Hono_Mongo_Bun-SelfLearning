import { html } from 'hono/html';

type HtmlEscapedString = string; // HtmlEscapedString replacement as it's not exposed by hono/html

export default function Layout({ title, content } : { title: string, content: (HtmlEscapedString | Promise<HtmlEscapedString>) }) {
  return html`
    <div>
      <h1>Hello</h1>
      <p>Welcome to the app</p>
    </div>
  `;
}
