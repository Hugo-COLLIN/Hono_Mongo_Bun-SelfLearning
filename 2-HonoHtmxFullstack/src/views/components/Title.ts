import {html} from 'hono/html';
import {css} from 'hono/css';


export default function Title({title, primary}: { title: string, primary?: boolean }) {
  css`
      h1 {
          color: red;
      }

      h1.primary {
          color: blue;
      }
  `;

  return html`
    <h1 class="${primary ? 'primary' : ''}">${title}</h1>
  `;
}
