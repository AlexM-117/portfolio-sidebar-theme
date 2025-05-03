/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `text-image-block`
 *
 * @demo index.html
 * @element text-image-block
 */
export class TextImageBlock extends DDDSuper(LitElement) {
  static get tag() {
    return "text-image-block";
  }

  constructor() {
    super();
    this.image = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        img {
          max-width: 100%;
          width: 300px;
          border-radius: 1rem;
        }
        .text-content {
          flex: 1;
          min-width: 250px;
          color: black;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="container">
        <img src="${this.image}" />
        <div class="text-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(TextImageBlock.tag, TextImageBlock);
