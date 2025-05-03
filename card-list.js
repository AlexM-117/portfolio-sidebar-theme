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
          display: block;
          padding: 2rem 1.5rem 1.5rem;
        }
        .card-list {
          display: flex;
          gap: 1rem;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card-list">
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(CardList.tag, CardList);
