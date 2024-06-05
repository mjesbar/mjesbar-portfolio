
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



class MjSectionWork extends MjSection {

  /* Structure
   *
   * mj-section-work
   * |-- workContainer
   * |   |-- workEl1
   * |   |-- workEl2
   * |   '-- workElN...
   *
   */

  constructor() {
    super();
    this.workContainer = document.createElement('div');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================
    // Children ================================================================
    // Styles ==================================================================
    // Append ==================================================================
    // Events ==================================================================
  }
}


customElements.define('mj-section-work', MjSectionWork);
