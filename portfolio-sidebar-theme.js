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
    this.active = {};
    this.screen = 0;
    this.screens = [];

    this.addEventListener("screen-change", (e) => {
      let tmp = this.screen + parseInt(e.detail.direction);
      tmp = Math.max(0, Math.min(tmp, this.screens.length - 1));
      this.screen = tmp;
    });
    this.addEventListener("screen-ready", (e) => {
      this.screens = [...this.screens, e.detail.screen];
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    const hash = globalThis.location.hash.replace("#", "");
    if (hash && !isNaN(hash)) {
      this.screen = parseInt(hash);
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screen: { type: Number, reflect: true },
      screens: { type: Array },
      active: { type: Object },
    };
  }

  updated(changedProperties) {
    if (super.updated) super.updated(changedProperties);
    // if screen changes, update the hash
    if (
      this.shadowRoot &&
      (changedProperties.has("screens") || changedProperties.has("screen")) &&
      this.screens.length > 0
    ) {
      globalThis.location.hash = `screen-${this.screen}`;
      // scroll the screen into view
      let active = this.screens.find((screen) => screen.sid === this.screen);
      if (active) {
        this.screens.forEach((screen) => {
          screen.active = screen.sid === this.screen;
        });

        this.active = active;
        this.active.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
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
          margin-left: 200px;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <portfolio-sidebar></portfolio-sidebar>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(
  PortfolioSidebarTheme.tag,
  PortfolioSidebarTheme
);
