
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



class MjSectionWork extends MjSection {

  /* Structure
   *
   * mj-section-work
   * |
   * |-- detectorEl (relative) layer:0
   * |-- blurredBgEl (absolute) layer:0
   * |-- shadowBgEl (absolute) layer:1
   * |-- workContainer layer:2
   * |   |-- workText
   * |   |   |-- workTitle
   * |   |   '-- workDescription
   * |   |-- workMedia
   * |   |-- iconEl1 (absolute)
   * |   '-- iconEl1 (absolute)
   * |** miscEl1 (absolute) layer:4
   * |** miscEl2 (absolute) layer:4
   * |** miscElN... (absolute) layer:4
   *
   */

  constructor() {
    super();
    this.blurredBgEl = document.createElement('img');
    this.shadowBgEl = document.createElement('div');
    this.workContainer = document.createElement('div');
    this.workTextEl = document.createElement('div');
    this.workMediaEl = document.createElement('video');
    this.detectorEl = document.createElement('div');
    this.iconTopEl = document.createElement('img');
    this.iconBotEl = document.createElement('img');
    this.linkEl = document.createElement('a');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================
    
    const backgroundUrl = this.getAttribute('background-src');
    const subtitle = this.getAttribute('subtitle');
    const description1 = this.getAttribute('description1');
    const description2 = this.getAttribute('description2');
    const mediaSrc = this.getAttribute('media-src') || 'none';
    const medias = this.getAttribute('medias') || 1;
    const iconTopSrc = this.getAttribute('icon-top-src');
    const iconBotSrc = this.getAttribute('icon-bot-src');
    const linkUrl = this.getAttribute('link-url');

    // Children ================================================================
    
    this.blurredBgEl.className = 'blurred-bg';
    this.blurredBgEl.src = backgroundUrl;

    this.workContainer.className = 'work-container';

    this.workTextEl.className = 'work-text';
    this.workTextEl.innerHTML = `
      <h1>${subtitle}</h1>
      <p>${description1}</p>
      <p>${description2 || ''}</p>
    `;

    this.detectorEl.className = 'detector';

    this.workMediaEl.className = 'work-media';
    this.workMediaEl.autoplay = true;
    this.workMediaEl.innerHTML = `
      <source src="${mediaSrc.replace('*', '1')}" type="video/webm">
    `;
    let currentMedia = 1;
    this.workMediaEl.setAttribute('current', currentMedia);

    this.iconTopEl.className = 'icon';
    this.iconTopEl.src = iconTopSrc;
    this.iconBotEl.className = 'icon';
    this.iconBotEl.src = iconBotSrc;

    this.linkEl.className = 'link';
    this.linkEl.href = linkUrl;
    this.linkEl.target = '_blank';
    this.linkEl.innerHTML = `
      <p>View Project</p>
      <img width="auto" height="100%" src="/src/assets/arrow.webp" alt="arrow">
    `;


    // Styles ==================================================================
    
    Object.assign(this.style, {
      position: 'relative', zIndex: '0',
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '100vh',
      overflow: 'hidden',
    });

    Object.assign(this.blurredBgEl.style, {
      position: 'absolute', zIndex: '0',
      width: '100%', height: '100%',
      objectFit: 'contain',
      opacity: '0.1', filter: 'blur(5px)',
    });

    Object.assign(this.shadowBgEl.style, {
      position: 'absolute', zIndex: '1',
      width: '100%', height: '100%',
      backgroundImage: `linear-gradient(
        to top,
        ${Colour.black} 20%,
        ${Colour.transparent} 50%,
        ${Colour.black} 80%
      )`,
    });

    Object.assign(this.workContainer.style, {
      position: 'relative', zIndex: '2', top: '3vh',
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
      width: '85%', height: '85%',
      backgroundColor: Colour.transparent,
      backdropFilter: 'blur(25px)',
      margin: 0, padding: 0, border: `5px solid ${Colour.gray20}`,
      borderRadius: '10px',
    });

    Object.assign(this.workTextEl.style, {
      display: 'flex',
      flexDirection: 'column', alignItems: 'start', justifyContent: 'center',
      width: '36%', height: 'auto',
      margin: 0, padding: '2%', border: 0,
      color: Colour.white,
      fontSize: '1.5em',
    });

    Object.assign(this.workMediaEl.style, {
      width: '50%', height: 'auto',
      objectFit: 'contain',
      margin: 0, padding: 0, border: 0,
      borderRadius: '10px',
    });

    Object.assign(this.detectorEl.style, {
      position: 'absolute', zIndex: '3',
      width: '100%', height: '1px',
      margin: 0, padding: 0, border: 0,
    });

    Object.assign(this.iconTopEl.style, {
      position: 'absolute', zIndex: '4', left: '90%', top: '5%',
      width: '20%', height: 'auto',
      margin: 0, padding: 0, border: 0,
      transform: 'rotate(-15deg)',
    });

    Object.assign(this.iconBotEl.style, {
      position: 'absolute', zIndex: '4', left: '-10%', top: '65%',
      width: '20%', height: 'auto',
      margin: 0, padding: 0, border: 0,
      transform: 'rotate(15deg)',
    });
    
    Object.assign(this.linkEl.style, {
      position: 'absolute', zIndex: '4', left: '65%', top: '85%',
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
      width: '15%', height: '5%',
      margin: 0, padding: 0, border: 0,
      color: Colour.white,
      fontSize: '2em',
    });
    
    // Append ==================================================================

    this.appendChild(this.detectorEl);
    this.appendChild(this.blurredBgEl);
    this.appendChild(this.shadowBgEl);
    this.appendChild(this.workContainer);
    this.workContainer.appendChild(this.workTextEl);
    this.workContainer.appendChild(this.workMediaEl);
    this.workContainer.appendChild(this.iconTopEl);
    this.workContainer.appendChild(this.iconBotEl);
    this.workContainer.appendChild(this.linkEl);

    // for loop to append miscElN...

    // Events ==================================================================

    this.workMediaEl.onended = () => {
      currentMedia = currentMedia + 1 > medias ? 1 : currentMedia + 1;
      const source = this.workMediaEl.querySelector('source');
      source.setAttribute('current', currentMedia);
      source.src = mediaSrc.replace('*', currentMedia);
      this.workMediaEl.load();
      this.workMediaEl.play();
    }
  }
}


customElements.define('mj-section-work', MjSectionWork);
