/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `project-card`
 *
 * @demo index.html
 * @element project-card
 */
export class ProjectCard extends DDDSuper(LitElement) {
  static get tag() {
    return "project-card";
  }

  constructor() {
    super();
    this.title = "Project Title";
    this.description = "Project Description";
    this.link = "#";
    this.image = "";
    this.expanded = false;
    this.showButton = true;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String },
      expanded: { type: Boolean },
      showButton: { type: Boolean },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: 100%;
          height: 100%;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          background-color: var(--ddd-theme-default-coalyGray);
          color: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-sm);
          overflow: hidden;
        }
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }
        .card.collapsed {
          height: 100%;
        }
        .card.expanded {
          height: 100%;
        }
        .content {
          padding: var(--ddd-spacing-4);
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        h3 {
          margin: 0 0 0.5rem;
          font-size: 0.95rem;
        }
        p {
          font-size: 1rem;
          margin: 0 0 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          transition: max-height 0.3s ease-in-out;
        }
        p.truncated {
          -webkit-line-clamp: 3;
          max-height: 4.5rem;
        }
        p:not(.truncated) {
          max-height: none;
        }
        .toggle {
          color: var(--ddd-theme-default-white);
          cursor: pointer;
          text-decoration: none;
        }
        a.button {
          text-align: center;
          text-decoration: none;
          color: var(--ddd-theme-default-white);
          background-color: var(--ddd-theme-default-nittanyNavy);
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          border-radius: var(--ddd-radius-xs);
        }
        img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          margin: 12px auto 0 auto;
          display: block;
        }
        .button-container {
          margin-top: auto;
          padding: var(--ddd-spacing-1);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card ${this.expanded ? "expanded" : "collapsed"}">
        <img src="${this.image}" />
        <div class="content">
          <h3>${this.title}</h3>
          <p class="${this.expanded ? "" : "truncated"}">${this.description}</p>
          <div class="button-container">
            <span class="toggle" @click="${this.toggleExpanded}">
              ${this.expanded ? "Show Less" : "Show More"}
            </span>
            ${this.showButton
              ? html`
                  <a
                    class="button"
                    href="${this.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >View Project
                  </a>
                `
              : ""}
          </div>
        </div>
      </div>
    `;
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
    this.dispatchEvent(
      new CustomEvent("card-toggled", {
        bubbles: true,
        composed: true,
        detail: { expanded: this.expanded },
      })
    );
  }

  connectedCallback() {
    super.connectedCallback?.();
    const attr = this.getAttribute("showbutton");
    this.showButton = attr !== null && attr !== "false";
  }

  updated(changedProperties) {
    super.updated?.(changedProperties);
    if (changedProperties.has("expanded")) {
      this.dispatchEvent(
        new CustomEvent("card-toggled", {
          bubbles: true,
          composed: true,
          detail: { expanded: this.exapnded },
        })
      );
    }
  }
}

globalThis.customElements.define(ProjectCard.tag, ProjectCard);
