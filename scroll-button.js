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
          bottom: var(--ddd-spacing-5);
          right: var(--ddd-spacing-5);
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        :host([visible]) {
          opacity: 1;
          pointer-events: auto;
        }
        button {
          background-color: var(--ddd-theme-default-slateGray);
          color: var(--ddd-theme-default-white);
          width: 2.5rem;
          height: 2.5rem;
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
    return html`<button @click="${this._scrollToTop}">↑</button>`;
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
    this.visible = window.scrollY > window.innerHeight;
  }

  _scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updated(changedProperties) {
    super.updated?.(changedProperties);
    this.toggleAttribute("visible", this.visible);
  }
}

globalThis.customElements.define(ScrollButton.tag, ScrollButton);
