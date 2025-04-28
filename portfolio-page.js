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
    this.description = "";
    //this.pageNumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      description: { type: String },
      //pageNumber: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: var(--ddd-theme-accent, white);
          height: 100vh;
          display: block;
        }
        h1 {
          font-family: var(--ddd-font-navigation);
          font-size: 2.5rem;
          text-align: right;
          background-color: darkblue;
          padding: 1rem;
          margin: 0;
          //background-image: linear-gradient(to right, rgb(200, 200, 200));
        }
        .subtitle-container {
          display: block;
          align-items: center;
          justify-content: center;
          margin: 1.5rem 0;
        }
        .line {
          flex: 1;
          height: 2px;
          background-color: black;
          margin: 0 1rem;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
          color: black;
        }
        .content-wrapper {
          margin-left: 20%;
        }
        p {
          color: black;
          font-size: 1rem;
          line-height: 1.5;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="content-wrapper">
      <h1>${this.title}</h1>
      <div class="subtitle-container">
        <div class="line"></div>
        <h2>${this.subtitle}</h2>
        <div class="line"></div>
      </div>
      <p>${this.description}</p>
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
