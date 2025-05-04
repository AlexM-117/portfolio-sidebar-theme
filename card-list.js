/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `card-list`
 *
 * @demo index.html
 * @element card-list
 */
export class CardList extends DDDSuper(LitElement) {
  static get tag() {
    return "card-list";
  }

  constructor() {
    super();
    this.collapsedHeight = 0;
    this.expandedHeight = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      collapsedHeight: { type: Number },
      expandedHeight: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: 2rem 1.5rem 1.5rem;
        }
        .card-list {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: flex-start;
          justify-content: center;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card-list">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback?.();
    this._boundCardToggled = this.handleCardToggled.bind(this);
    this._boundUpdateHeights = this.updateCardHeight.bind(this);

    setTimeout(() => this.updateCardHeight(), 0);

    window.addEventListener("resize", this._boundUpdateHeights);

    this.addEventListener("card-toggled", this._boundCardToggled);
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    window.removeEventListener("resize", this._boundUpdateHeights);
    this.removeEventListener("card-toggled", this._boundCardToggled);
  }

  handleCardToggled(e) {
    const toggledCard = e.target;

    if (this.expandedHeight === 0 || this.collapsedHeight === 0) {
      this.updateCardHeight();
      return;
    }

    if (toggledCard.expanded) {
      toggledCard.style.height = `${this.expandedHeight}px`;
    } else {
      toggledCard.style.height = `${this.collapsedHeight}px`;
    }
  }

  updateCardHeight() {
    const slot = this.shadowRoot.querySelector("slot");
    if (!slot) return;

    const cards = slot
      .assignedElements()
      .filter((el) => el.tagName.toLowerCase() === "project-card");

    if (cards.length === 0) return;

    cards.forEach((card) => {
      card.style.height = "auto";
    });

    const expandedCards = cards.filter((card) => card.expanded);
    const collapsedCards = cards.filter((card) => !card.expanded);

    let maxCollapsedHeight = 0;
    let maxExpandedHeight = 0;

    collapsedCards.forEach((card) => {
      const height = card.getBoundingClientRect().height;
      maxCollapsedHeight = Math.max(maxCollapsedHeight, height);
    });

    if (expandedCards.length === 0 && collapsedCards.length > 0) {
      const firstCard = collapsedCards[0];
      firstCard.expanded = true;
      setTimeout(() => {
        maxExpandedHeight = firstCard.getBoundingClientRect().height;
        firstCard.expanded = false;

        this.collapsedHeight = maxCollapsedHeight;
        this.expandedHeight = maxExpandedHeight;

        this.applyHeightsToCards(cards);
      }, 0);
      return;
    } else {
      expandedCards.forEach((card) => {
        const height = card.getBoundingClientRect().height;
        maxExpandedHeight = Math.max(maxExpandedHeight, height);
      });
    }

    this.collapsedHeight = maxCollapsedHeight;
    this.expandedHeight = maxExpandedHeight;

    this.applyHeightsToCards(cards);
  }

  applyHeightsToCards(cards) {
    cards.forEach((card) => {
      if (card.expanded) {
        card.style.height = `${this.expandedHeight}px`;
      } else {
        card.style.height = `${this.collapsedHeight}px`;
      }
    });
  }
}

globalThis.customElements.define(CardList.tag, CardList);
