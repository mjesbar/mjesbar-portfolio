
import { Colour } from '/src/palette.js';


class MjesbarNav extends HTMLElement {
  constructor() {
    super();

    const tagStyle = {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      transition: 'transform 0.25s',
      position: 'fixed', zIndex: 10, top: 0, left: 0,
      width: '100%', height: '10vh',
      backgroundColor: Colour.black, color: Colour.white,
      overflow: 'visible',
    };
    Object.assign(this.style, tagStyle);

    // Make visible this element when pointer is near
    document.onmousemove = (event) => {
      const navBar = document.querySelector('mjesbar-nav');
      const navRect = navBar.getBoundingClientRect();
      const tolerance = 50; // Adjust this value to change the proximity threshold
      let isShowing = false;

      const isNearNavBar = (
        event.clientY >= navRect.top - tolerance
        && event.clientY <= navRect.bottom + tolerance
      );
      if (isNearNavBar && !isShowing) {
        this.style.transform = 'translateY(0vh)';
        isShowing = true;
      }
    };

    // hide the element when user scroll down, and appear when scroll up.
    // no matter the current scroll position.
    document.onscroll = () => {
      let scrollPos = window.scrollY || document.documentElement.scrollTop;
      if (scrollPos > this.lastScrollPos) {
        this.style.transform = 'translateY(-10vh)';
      }
      else {
        this.style.transform = 'translateY(0vh)';
      }
      this.lastScrollPos = scrollPos;
    }
  }

  connectedCallback() {
    // Dynamic logo, omnipresent link to home
    const logoContainer = document.createElement('div');
    const logoLeftText = document.createElement('span');
    const logoCenterIcon = document.createElement('div');
    const logoRightText = document.createElement('span');

    // Styles

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
      transition: 'transform 0.25s',
    };
    Object.assign(logoLeftText.style, logoLeftTextStyle);

    const logoCenterIconStyle = {
      position: 'relative',
      width: 'auto', height: '10%', aspectRatio: '1 / 1',
      margin: 0, padding: 0, border: 0,
      borderRadius: '50%',
      backgroundColor: Colour.persimmon,
      transition: 'transform 0.25s',
    };
    Object.assign(logoCenterIcon.style, logoCenterIconStyle);

    const logoRightTextStyle = {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '33.33%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      fontSize: '16px', fontWeight: 'bold',
      transition: 'transform 0.25s',
    };
    Object.assign(logoRightText.style, logoRightTextStyle);

    // Content
    logoLeftText.textContent = 'Mjesbar';
    logoRightText.textContent = 'Dev';

    // Append DOM Tree

    logoContainer.appendChild(logoLeftText);
    logoContainer.appendChild(logoCenterIcon);

    const numberOfRings = 4;
    for (let i = 0; i < numberOfRings; i++) {
      const logoCenterMisc = document.createElement('div');
      // Randomize traits
      const orderColour = [
        Colour.sage,
        Colour.sageLow,
        Colour.iceBlueLow,
        Colour.persimmonLow,
      ]
      // Set style
      const logoCenterMiscStyle = {
        position: 'absolute',
        left: '50%', top: '50%',
        width: 'auto', height: '100%', aspectRatio: '1 / 1',
        margin: 0, padding: 0,
        borderRadius: '100%',
        border: '15px solid ' + Colour.transparent,
        borderRightColor: orderColour[i],
        borderLeftColor: orderColour[i],
        backgroundColor: Colour.transparent,
        transform: 'translate(-50%, -50%) rotate(0deg)',
        opacity: 0.0,
        transition: 'transform 1s, opacity 0.5s',
      };
      Object.assign(logoCenterMisc.style, logoCenterMiscStyle);
      logoCenterIcon.appendChild(logoCenterMisc);
    }

    logoContainer.appendChild(logoRightText);
    this.appendChild(logoContainer);

    // Event Handlers

    logoContainer.onmouseenter = () => {
      logoContainer.style.transform = 'scale(1.5) translateY(2.5vh)';
      logoCenterIcon.style.height = '50%';
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
          Colour.iceBlueLow,
          Colour.persimmonLow,
        ]
        // Set style
        const logoCenterMiscStyle = {
          position: 'absolute',
          left: '50%', top: '50%',
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
      window.location.href = '/';
    }
  }
}


customElements.define('mjesbar-nav', MjesbarNav, { extends: 'div' });
