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
    this.pagenumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
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
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <h1>${this.title}</h1>
      <slot></slot>`;
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
