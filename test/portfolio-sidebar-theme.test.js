import { html, fixture, expect } from '@open-wc/testing';
import "../portfolio-sidebar-theme.js";

describe("PortfolioSidebarTheme test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <portfolio-sidebar-theme
        title="title"
      ></portfolio-sidebar-theme>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
