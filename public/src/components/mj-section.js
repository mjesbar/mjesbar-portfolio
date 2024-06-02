
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
  }

  connectedCallback() {
    // mj-section-welcome
    // Inherited from mj-section
    super.connectedCallback();
    this.style.height = '30vh';
    this.style.margin = '35vh';
    this.setAttribute('showing', 'false');

    // Attributes ==============================================================

    const mainText = this.getAttribute('main-text');
    const subText = this.getAttribute('sub-text');
    const miniText = this.getAttribute('mini-text');

    // Children ================================================================

    const mainTextElement = document.createElement('h1');
    mainTextElement.textContent = mainText;
    const subTextElement = document.createElement('h2');
    subTextElement.textContent = subText;
    const miniTextElement = document.createElement('p');
    miniTextElement.textContent = miniText;

    // Styles ==================================================================

    const MjSectionTextaloneStyle = {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    };
    Object.assign(this.style, MjSectionTextaloneStyle);

    const mainTextStyle = {
      fontSize: '3em',
      transform: 'translateY(-100px)',
      color: Colour.white, filter: 'blur(5px)', opacity: 0,
      transition: 'transform 2s, opacity 2s, filter 2s',
    };
    Object.assign(mainTextElement.style, mainTextStyle);

    const subTextStyle = {
      position: 'relative', left: '60px',
      transform: 'translateX(200px)',
      color: Colour.gray80, filter: 'blur(5px)', opacity: 0,
      transition: 'transform 2s, opacity 2s, filter 2s',
    };
    Object.assign(subTextElement.style, subTextStyle);

    const miniTextStyle = {
      position: 'relative', right: '50px',
      transform: 'translateX(-200px)',
      color: Colour.gray60, filter: 'blur(5px)', opacity: 0,
      transition: 'transform 2s, opacity 2s, filter 2s',
    };
    Object.assign(miniTextElement.style, miniTextStyle);

    // Append ==================================================================   

    this.appendChild(mainTextElement);
    this.appendChild(subTextElement);
    this.appendChild(miniTextElement);

    // Events ==================================================================

    const clientHeight = document.documentElement.clientHeight;
    if (this.getBoundingClientRect().top < clientHeight) {
      this.setAttribute('showing', 'true');
    }
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


customElements.define('mj-section', MjSection);
customElements.define('mj-section-textalone', MjSectionTextalone);
