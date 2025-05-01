/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./portfolio-sidebar.js";

/**
 * `portfolio-sidebar-theme`
 *
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.pages = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
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
        portfolio-sidebar {
          display: block;
          position: fixed;
          width: 200px;
          top: 0;
          bottom: 0;
          left: 0;
          text-align: left;
        }
        .wrapper {
          margin-left: 100px;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <portfolio-sidebar>
        <ul>
          ${this.pages.map(
            (page, index) =>
              html`<li>
                <a
                  href="#${page.number}"
                  @click="${this.linkChange}"
                  data-index="${index}"
                  >${page.title}</a
                >
              </li>`
          )}
        </ul>
      </portfolio-sidebar>
      <div class="wrapper" @page-added="${this.addPage}">
        <slot></slot>
      </div>
    </div>`;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute("data-index"));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value;
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    };
    this.pages = [...this.pages, page];
  }
}

globalThis.customElements.define(
  PortfolioSidebarTheme.tag,
  PortfolioSidebarTheme
);
