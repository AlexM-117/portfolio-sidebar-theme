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
    this.subtitle = "";
    this.pagenumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      pagenumber: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: var(--ddd-theme-default-white);
          height: 100vh;
          display: block;
        }
        h1 {
          font-family: var(--ddd-font-navigation);
          font-size: 2.5rem;
          text-align: center;
          color: white;
          padding: 1rem;
          margin: 0;
          background-color: var(--ddd-theme-default-nittanyNavy);
        }
        .subtitle-container {
          display: block;
          align-items: center;
          justify-content: center;
          margin: 1rem 0;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
          color: black;
        }
        .content-wrapper {
          text-align: left;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="content-wrapper">
      <h1>${this.title}</h1>
      <div class="subtitle-container">
        <h2>${this.subtitle}</h2>
      </div>
      <slot></slot>
    </div>`;
  }

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
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);
