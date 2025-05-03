/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `card-list`
 *
 * @demo index.html
 * @element card-list
 */
export class CardList extends DDDSuper(LitElement) {
  static get tag() {
    return "card-list";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          max-width: 300px;
          min-height: 450px;
          background-color: var(--ddd-theme-default-coalyGray);
          color: white;
          border-radius: var(--ddd-radius-sm);
          overflow: hidden;
        }
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .content {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        h3 {
          margin: 0 0 0.5rem;
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
          margin: 0 0 1rem;
        }
        a.button {
          display: block;
          text-align: center;
          text-decoration: none;
          color: var(--ddd-theme-default-white);
          background-color: var(--ddd-theme-default-nittanyNavy);
          padding: 0.5rem 1rem;
          margin: 16px;
          border-radius: var(--ddd-radius-xs);
        }
        img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html``;
  }
}

globalThis.customElements.define(CardList.tag, CardList);
