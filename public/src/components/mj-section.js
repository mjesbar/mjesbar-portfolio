
import { Colour } from '/src/palette.js';



class MjSection extends HTMLElement {


  static observedAttributes = ['showing'];

  constructor() {
    super();
    // Abstract class
  }

  connectedCallback() {
    // mj-section
    // |- mj-section-child-class* (Polymorphism)

    // Styles ==================================================================

    const MjSectionStyle = {
      width: '100%', height: '100vh',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent,
    };
    Object.assign(this.style, MjSectionStyle);

    // Children =================================================================
    // *Child class will be appended here*
  }
}


class MjSectionTextalone extends MjSection {

  constructor() {
    super();
    this.mainTextEl = document.createElement('h1');
    this.subTextEl = document.createElement('h2');
    this.miniTextEl = document.createElement('p');
    this.blurredBgEl = document.createElement('img');
    this.mirrorEl = document.createElement('div');
  }

  connectedCallback() {
    // mj-section-welcome
    // Inherited from mj-section
    super.connectedCallback();
    this.setAttribute('showing', 'false');

    // Attributes ==============================================================

    const mainText = this.getAttribute('main-text');
    const subText = this.getAttribute('sub-text');
    const miniText = this.getAttribute('mini-text');
    const bgImgSrc = this.getAttribute('background-image');

    // Children ================================================================

    this.mainTextEl.textContent = mainText;
    this.subTextEl.textContent = subText;
    this.miniTextEl.textContent = miniText;
    this.blurredBgEl.src = bgImgSrc;

    // Styles ==================================================================

    const MjSectionOverwriteStyle = {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    };
    Object.assign(this.style, MjSectionOverwriteStyle);

    const mainTextStyle = {
      position: 'relative',
      fontSize: '3em',
      transform: 'translateY(-100px)',
      color: Colour.white, filter: 'blur(5px)', opacity: 0,
      transition: 'transform 2s, opacity 2s, filter 2s',
    };
    Object.assign(this.mainTextEl.style, mainTextStyle);

    const subTextStyle = {
      position: 'relative', left: '60px',
      transform: 'translateX(200px)',
      color: Colour.gray80, filter: 'blur(5px)', opacity: 0,
      transition: 'transform 2s, opacity 2s, filter 2s',
    };
    Object.assign(this.subTextEl.style, subTextStyle);

    const miniTextStyle = {
      position: 'relative', right: '50px',
      transform: 'translateX(-200px)',
      color: Colour.gray60, filter: 'blur(5px)', opacity: 0,
      transition: 'transform 2s, opacity 2s, filter 2s',
    };
    Object.assign(this.miniTextEl.style, miniTextStyle);

    const mirrorStyle = {
      position: 'absolute', width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, backdropFilter: 'blur(3px)',
      zIndex: '0',
    };
    Object.assign(this.mirrorEl.style, mirrorStyle);

    const blurredBgStyle = {
      position: 'absolute',
      width: 'auto', height: '40%',
      margin: 0, padding: 0, border: 0,
      zIndex: '-1', opacity: 0.25,
    };
    Object.assign(this.blurredBgEl.style, blurredBgStyle);

    // Append ==================================================================   

    this.appendChild(this.mirrorEl);
    this.appendChild(this.blurredBgEl);
    this.appendChild(this.mainTextEl);
    this.appendChild(this.subTextEl);
    this.appendChild(this.miniTextEl);

    // Events ==================================================================

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.parentElement.setAttribute('showing', 'true');
        }
        else {
          entry.target.parentElement.setAttribute('showing', 'false');
        }
      });
    });
    observer.observe(this.mainTextEl);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // mj-section-welcome
    if (name === 'showing') {
      if (newValue === oldValue) return;
      const mainTextElement = this.querySelector('h1');
      const subTextElement = this.querySelector('h2');
      const miniTextElement = this.querySelector('p');
      if (newValue === 'true' && oldValue === 'false') {
        mainTextElement.style.opacity = 1; 
        mainTextElement.style.filter = 'blur(0px)';
        mainTextElement.style.transform = 'translateY(0px)';
        subTextElement.style.opacity = 1;
        subTextElement.style.filter = 'blur(0px)';
        subTextElement.style.transform = 'translateX(0px)';
        miniTextElement.style.opacity = 1;
        miniTextElement.style.filter = 'blur(0px)';
        miniTextElement.style.transform = 'translateX(0px)';
      }
      else if (newValue === 'false' && oldValue === 'true') {
        mainTextElement.style.opacity = 0;
        mainTextElement.style.filter = 'blur(5px)';
        mainTextElement.style.transform = 'translateY(-100px)';
        subTextElement.style.opacity = 0;
        subTextElement.style.filter = 'blur(5px)';
        subTextElement.style.transform = 'translateX(200px)';
        miniTextElement.style.opacity = 0;
        miniTextElement.style.filter = 'blur(5px)';
        miniTextElement.style.transform = 'translateX(-200px)';
      }
    }
  }
}


class MjSectionDual extends MjSection {

  constructor() {
    super();
    this.containerRight = document.createElement('div');
    this.containerLeft = document.createElement('div');
    this.ImgEl = document.createElement('img');
    this.headingEl = document.createElement('h1');
    this.paragraphEl = document.createElement('p');
  }

  connectedCallback() {
    // mj-section-dual
    // Inherited from mj-section
    super.connectedCallback();
    this.setAttribute('showing', 'false');

    // Attributes ==============================================================

    const imgSrc = this.getAttribute('image-src');
    const imgPos = this.getAttribute('image-position');

    // Children ================================================================

    

    // Styles ==================================================================

    // Append ==================================================================

    this.appendChild(this.containerLeft);
    this.appendChild(this.containerRight);
    if (imgPos === 'left') {
      this.containerLeft.appendChild(this.ImgEl);
      this.containerRight.appendChild(this.headingEl);
      this.containerRight.appendChild(this.paragraphEl);
    }
    else {
      this.containerRight.appendChild(this.ImgEl);
      this.containerLeft.appendChild(this.headingEl);
      this.containerLeft.appendChild(this.paragraphEl);
    }

    // Events ==================================================================

  }

  attributeChangedCallback(name, oldValue, newValue) {

  }
}

customElements.define('mj-section', MjSection);
customElements.define('mj-section-textalone', MjSectionTextalone);
