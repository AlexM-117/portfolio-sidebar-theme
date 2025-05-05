/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-sidebar`
 *
 * @demo index.html
 * @element portfolio-sidebar
 */
export class PortfolioSidebar extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-sidebar";
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
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-4);
          background-color: var(--ddd-theme-default-coalyGray);
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }
        .links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--ddd-spacing-3);
        }
        ::slotted(a) {
          display: block;
          padding: var(--ddd-spacing-2);
          text-decoration: none;
          font-size: 1rem;
          font-family: var(--ddd-font-navigation);
          text-align: center;
        }
        .image {
          width: 160px;
          height: auto;
          border-radius: 50%;
          margin-bottom: var(--ddd-spacing-2);
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <img class="image" src="./assets/PennState.png" alt="Penn State" />
      <div class="links">
        <slot></slot>
      </div>
    </div>`;
  }
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);
