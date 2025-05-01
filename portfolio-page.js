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
    //this.pageNumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      //pageNumber: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: var(--ddd-theme-default-roarLight);
          height: 100vh;
          display: block;
        }
        h1 {
          font-family: var(--ddd-font-navigation);
          font-size: 2.5rem;
          text-align: center;
          color: black;
          padding: 1rem;
          margin: 0;
          background: linear-gradient(
            to right,
            rgba(191, 130, 38, 0.25),
            rgba(191, 130, 38, 0.5),
            rgba(191, 130, 38, 1),
            rgba(191, 130, 38, 0.5),
            rgba(191, 130, 38, 0.25)
          );
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
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);
