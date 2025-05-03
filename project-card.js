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
    this.altImg = "Project Image";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String },
      altImg: { type: String },
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
          max-width: 300px;
          margin: 1rem;
          background-color: var(--ddd-theme-default-coalyGray);
          color: white;
          border-radius: 1rem;
          box-sizing: border-box;
          flex: 1 1 300px;
        }
        h3 {
          margin: 0 0 0.5rem;
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
          margin: 0 0 1rem;
        }
        a {
          text-decoration: none;
          color: var(--ddd-theme-default-white);
          background-color: var(--ddd-theme-default-nittanyNavy);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <img src="${this.image}" alt="${this.altImg}" />
      <h3>${this.title}</h3>
      <p>${this.description}</p>
      <a href="${this.link}" target="_blank" rel="noopener noreferrer"
        >View Project</a
      >
    `;
  }
}

globalThis.customElements.define(ProjectCard.tag, ProjectCard);
