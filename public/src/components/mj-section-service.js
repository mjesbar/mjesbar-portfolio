// copy te class struture of the file mj-section-work.js and paste it in the file
// mj-section-service.js, omit the content, just take her the general skeleton.
// Attributes, Styles, Children, and Events.

import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';

class MjSectionService extends MjSection {

  /* Structure
   *
   * mj-section-service
   * |
   * |-- detectorEl (relative) layer:0
   * |-- blurredBgEl (absolute) layer:0
   * |-- shadowBgEl (absolute) layer:1
   * |-- serviceContainer layer:2
   *     |-- serviceText
   *     |   |-- serviceTitle
   *     |   '-- serviceDescription
   *     |-- serviceMedia
   *     |-- iconEl1 (absolute)
   *     '-- iconEl1 (absolute)
   *
   */

  constructor() {
    super();
    this.blurredBgEl = document.createElement('img');
    this.shadowBgEl = document.createElement('div');
    this.serviceContainer = document.createElement('div');
    this.serviceTextEl = document.createElement('div');
    this.serviceMediaEl = document.createElement('video');
    this.detectorEl = document.createElement('div');
    this.iconTopEl = document.createElement('img');
    this.iconBotEl = document.createElement('img');
    this.linkEl = document.createElement('a');
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
