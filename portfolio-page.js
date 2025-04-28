/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-page`
 *
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPage extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-page";
  }

  constructor() {
    super();
    this.title = "";
    this.pageNumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pageNumber: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: var(--ddd-theme-accent);
          height: 100vh;
          display: block;
          background-color: white;
        }
        h1 {
          font-family: var(--ddd-font-navigation);
          text-align: right;
          color: rgb(200, 200, 200);
          background-image: linear-gradient(to right, rgb(200, 200, 200));
        }
        .wrapper {
          padding: 40px;
        }
        p {
          color: black;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h1>${this.title}</h1>
      <p></p>
      <slot></slot>
    </div>`;
  }

  /*
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(
      new CustomEvent("page-added", {
        bubbles: true,
        composed: true,
        detail: {
          value: this,
        },
      })
    );
  }
    */
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);
