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
          display: flex;
          flex-direction: column;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          background-color: var(--ddd-theme-default-coalyGray);
          color: white;
          max-width: 300px;
          border-radius: var(--ddd-radius-sm);
          overflow: hidden;
        }
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          transition: all 0.3s ease-in-out;
        }
        .content {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        h3 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
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
          max-height: 6.5rem;
        }
        span.toggle {
          background-color: var(--ddd-theme-default-link);
          cursor: pointer;
          font-weight: 0.9rem;
          margin-bottom: 1rem;
          text-decoration: none;
          align-self: flex-start;
        }
        a.button {
          display: block;
          text-align: center;
          text-decoration: none;
          color: var(--ddd-theme-default-white);
          background-color: var(--ddd-theme-default-nittanyNavy);
          padding: 0.5rem 1rem;
          margin: 16px;
          border-radius: var(--ddd-radius-xs);
        }
        img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card">
        <img src="${this.image}" />
        <div class="content">
          <h3>${this.title}</h3>
          <p class="${this.expanded ? "" : "truncated"}">${this.description}</p>
          <span class="toggle" @click="${this.toggleExpanded}">
            ${this.expanded ? "Show Less" : "Show More"}
          </span>
        </div>
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
    `;
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  connectedCallback() {
    super.connectedCallback?.();
    const attr = this.getAttribute("showbutton");
    this.showButton = attr !== null && attr !== "false";
  }
}

globalThis.customElements.define(ProjectCard.tag, ProjectCard);
