/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `scroll-button`
 *
 * @demo index.html
 * @element scroll-button
 */
export class ScrollButton extends DDDSuper(LitElement) {
  static get tag() {
    return "scroll-button";
  }

  constructor() {
    super();
    this.visible = false;
    this._onScroll = this._onScroll.bind(this);
    this._scrollToTop = this._scrollToTop.bind(this);
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      visible: { type: Boolean },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        button {
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: white;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      ${this.visible
        ? html` <button @click="${this._scrollToTop}">↑</button> `
        : ""}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this._onScroll);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("scroll", this._onScroll);
  }
  _onScroll() {
    this.visible = window.scrollY > 300;
  }

  _scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

globalThis.customElements.define(ScrollButton.tag, ScrollButton);
