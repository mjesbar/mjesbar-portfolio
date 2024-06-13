
import { Colour } from '/src/palette.js';



class MjNav extends HTMLElement {

  static observedAttributes = ['showing'];

  constructor() {
    super();
    this.setAttribute('showing', true);
  }

  hideMjNavBar() {
    this.style.transform = 'translateY(-10vh)';
  }

  showMjNavBar() {
    this.style.transform = 'translateY(0vh)';
  }

  connectedCallback() {

    // Dynamic logo, omnipresent link to home
    // mj-nav
    // |- logoContainer
    //   |- logoLeftText
    //   |- logoCenterIcon
    //     |- logoCenterMisc1
    //     |- logoCenterMisc2
    //     |- ...
    //     |- logoCenterMiscN
    //  |- logoRightText

    // Attributes ==============================================================

    // Children ================================================================

    const logoContainer = document.createElement('div');
    const logoLeftText = document.createElement('span');
    const logoCenterIcon = document.createElement('div');
    const logoRightText = document.createElement('span');

    logoLeftText.textContent = 'Mjesbar';
    logoRightText.textContent = 'Dev';

    // Styles ==================================================================

    const mjNavStyle = {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      position: 'fixed', zIndex: 10, top: 0, left: 0,
      width: '100%', height: '10vh',
      backgroundColor: Colour.black, color: Colour.white,
      overflow: 'visible',
      transition: 'transform 0.25s',
    };
    Object.assign(this.style, mjNavStyle);

    const logoContainerStyle = {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      width: '450px', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      transition: 'transform 0.25s',
    };
    Object.assign(logoContainer.style, logoContainerStyle);

    const logoLeftTextStyle = {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '33.33%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      fontSize: '16px', fontWeight: 'bold',
      transition: 'transform 0.5s',
    };
    Object.assign(logoLeftText.style, logoLeftTextStyle);

    const logoCenterIconStyle = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: 'auto', height: '10%', aspectRatio: '1 / 1',
      margin: 0, padding: 0, border: 0,
      borderRadius: '50%',
      backgroundColor: Colour.persimmon,
      boxShadow: '0 0 12px 6px ' + Colour.persimmonLow,
      transition: 'transform 2s, height 0.25s',
    };
    Object.assign(logoCenterIcon.style, logoCenterIconStyle);

    const logoRightTextStyle = {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '33.33%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      fontSize: '16px', fontWeight: 'bold',
      transition: 'transform 0.5s',
    };
    Object.assign(logoRightText.style, logoRightTextStyle);

    // Append ==================================================================

    logoContainer.appendChild(logoLeftText);
    logoContainer.appendChild(logoCenterIcon);

    const numberOfRings = 5;
    for (let i = 0; i < numberOfRings; i++) {
      const logoCenterMisc = document.createElement('div');
      // Set style
      const logoCenterMiscStyle = {
        position: 'absolute', left: '50%', top: '50%', zIndex: -1,
        margin: 0, padding: 0, border: 0,
        transform: 'translate(-50%, -50%) rotate(0deg)',
        transition: 'transform 1s, opacity 0.25s',
      };
      Object.assign(logoCenterMisc.style, logoCenterMiscStyle);
      logoCenterIcon.appendChild(logoCenterMisc);
    }

    logoContainer.appendChild(logoRightText);
    this.appendChild(logoContainer);

    // Events ==================================================================

    logoContainer.onmouseenter = () => {
      // Animate logo
      logoContainer.style.transform = 'scale(1.6) translateY(25%)';
      logoCenterIcon.style.height = '30%';
      logoLeftText.style.transform = 'translateY(-25%)';
      logoRightText.style.transform = 'translateY(25%)';
      const rings = logoCenterIcon.querySelectorAll('div')
      for (let i = 0; i < rings.length; i++) {
        // Randomize traits
        const borderSize = 5 * (rings.length - i) - Math.floor(Math.random() * 2);
        const ringSize = 80 + 2 * (rings.length - i);
        const rotation = Math.floor(Math.random() * 180) - 180;
        const randomColour = [
          Colour.sage,
          Colour.sageLow,
          Colour.iceBlue,
          Colour.iceBlueLow,
          Colour.persimmonLow,
        ]
        // Set style
        const logoCenterMiscStyle = {
          position: 'absolute', left: '50%', top: '50%',
          width: 'auto', height: ringSize + '%', aspectRatio: '1 / 1',
          margin: 0, padding: 0,
          borderRadius: '100%',
          border: borderSize + 'px solid ' + Colour.transparent,
          borderRightColor: randomColour[i],
          borderLeftColor: randomColour[i],
          backgroundColor: Colour.transparent,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity: 1.0,
        };
        Object.assign(rings[i].style, logoCenterMiscStyle);
      }
    }

    logoContainer.onmouseleave = () => {
      // Reset logo
      logoContainer.style.transform = 'scale(1) translateY(0)';
      logoCenterIcon.style.height = '10%';
      logoLeftText.style.transform = 'translateY(25%)';
      logoRightText.style.transform = 'translateY(-25%)';
      logoCenterIcon.querySelectorAll('div').forEach((ring) => {
        ring.style.backgroundColor = Colour.transparent;
        ring.style.left = '50%';
        ring.style.top = '50%';
        ring.style.transform = 'translate(-50%,-50%) rotate(0deg)';
        ring.style.opacity = 0.0;
      });
    }

    logoContainer.onclick = () => {
      // Redirect to home
      window.location.href = '/';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'showing') {
      if (newValue === oldValue) return;
      (newValue === 'false' && oldValue === 'true') 
        ? this.hideMjNavBar()
        : null;
      (newValue === 'true' && oldValue === 'false')
        ? this.showMjNavBar()
        : null;
    }
  }
}


customElements.define('mj-nav', MjNav);
