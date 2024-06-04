
import { Colour } from '/src/palette.js';



class MjSection extends HTMLElement {

  /*
   * Abstract class for all sections
   */

  static observedAttributes = ['showing'];

  constructor() {
    super();
  }

  connectedCallback() {

    // Attributes ==============================================================
    // Children ================================================================
    // Styles ==================================================================
    
    const MjSectionStyle = {
      width: '100%', height: '100vh',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent,
    };
    Object.assign(this.style, MjSectionStyle);

    // Append ==================================================================
    // Events ==================================================================
  }
}


class MjSectionTextalone extends MjSection {

  /* Structure
   *
   * mj-section-textalone
   * |-- mainTextEl
   * |-- subTextEl
   * |-- miniTextEl
   * |-- blurredBgEl (absolute)
   * '-- mirrorEl (absolute)
   *
   */

  constructor() {
    super();
    this.mainTextEl = document.createElement('h1');
    this.subTextEl = document.createElement('h2');
    this.miniTextEl = document.createElement('p');
    this.blurredBgEl = document.createElement('img');
    this.mirrorEl = document.createElement('div');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================

    this.setAttribute('showing', 'false');
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
      color: Colour.white, filter: 'blur(3px)', opacity: 0,
      transition: 'transform 1s, opacity 1s, filter 1s',
    };
    Object.assign(this.mainTextEl.style, mainTextStyle);

    const subTextStyle = {
      position: 'relative', left: '60px',
      transform: 'translateX(200px)',
      color: Colour.gray80, filter: 'blur(3px)', opacity: 0,
      transition: 'transform 1.5s, opacity 1.5s, filter 1.5s',
    };
    Object.assign(this.subTextEl.style, subTextStyle);

    const miniTextStyle = {
      position: 'relative', right: '50px',
      transform: 'translateX(-200px)',
      color: Colour.gray60, filter: 'blur(3px)', opacity: 0,
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
    // handle the showing attribute changes
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
        mainTextElement.style.filter = 'blur(3px)';
        mainTextElement.style.transform = 'translateY(-100px)';
        subTextElement.style.opacity = 0;
        subTextElement.style.filter = 'blur(3px)';
        subTextElement.style.transform = 'translateX(200px)';
        miniTextElement.style.opacity = 0;
        miniTextElement.style.filter = 'blur(3px)';
        miniTextElement.style.transform = 'translateX(-200px)';
      }
    }
  }
}


class MjSectionDual extends MjSection {

  /* Structure
   *
   * mj-section-dual
   * |-- ImgEl (absolute)
   * |-- linesContainer
   * |   |-- wordEl1
   * |   |-- wordEl2
   * |   '-- wordElN...
   *
   */

  constructor() {
    super();
    this.linesContainer = document.createElement('div');
    this.ImgEl = document.createElement('img');
    this.wordEl = document.createElement('h1');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================

    this.setAttribute('showing', 'false');
    const imgSrc = this.getAttribute('img-src');
    const imgPos = this.getAttribute('img-pos');
    const lines = this.getAttribute('lines').split(',');

    // Children ================================================================

    this.ImgEl.src = imgSrc;
    this.wordEl.textContent = lines[0];

    // Styles ==================================================================

    const MjSectionOverwriteStyle = {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    };
    Object.assign(this.style, MjSectionOverwriteStyle);

    const linesContainerStyle = {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      overflow: 'hidden',
    };
    Object.assign(this.linesContainer.style, linesContainerStyle);

    const ImgStyle = {
      width: '50%', height: 'auto', minWidth: '680px', maxWidth: '50%',
      margin: 0, padding: 0, border: 0,
      zIndex: '1',
      position: 'absolute', top: 0, // left: 0, assigned below depend on attribute
      transition: 'transform 1s',
      userSelect: 'none',
      webkitUserSelect: 'none',
      webkitUserDrag: 'none',
      msUserSelect: 'none',
      pointerEvents: 'none',
    };
    Object.assign(this.ImgEl.style, ImgStyle);

    const lineStyle = {
      margin: 0, padding: 0, border: 0,
      opacity: 0,
      transition: 'opacity 1s, transform 1s',
    };

    const notEligibleStyle = {
      fontSize: '6em',
      margin: 0, padding: 0, border: 0,
      color: Colour.gray60,
      cursor: 'default',
    };

    const eligibleStyle = {
      fontSize: '10em', fontWeight: 'bold',
      margin: 0, padding: 0, border: 0,
      cursor: 'pointer',
      transition: 'color 0.25s, font-size 0.25s',
    };

    // Append ==================================================================

    this.appendChild(this.linesContainer);

    // apending lines and words
    let lineNumber = 0;
    for (const line of lines) {
      const elegibleWords = ['work', 'service', 'about', 'contact'];
      const words = line.split(' ');
      const lineEl = document.createElement('div');
      Object.assign(lineEl.style, lineStyle);
      for (const word of words) {
        const wordEl = document.createElement('span');
        wordEl.textContent = word;
        if (elegibleWords.includes(word.toLowerCase())) {
          Object.assign(wordEl.style, eligibleStyle);
          wordEl.setAttribute('eligible', 'true');
        }
        else {
          Object.assign(wordEl.style, notEligibleStyle);
        }
        lineEl.appendChild(wordEl);
      }
      lineNumber++;
      lineEl.setAttribute("line", lineNumber);
      (lineNumber % 2 === 0)
        ? lineEl.style.transform = 'translateX(-200px)'
        : lineEl.style.transform = 'translateX(200px)';
      this.linesContainer.appendChild(lineEl);
    }

    // appending image wheather left or right
    if (imgPos === 'left') {
      this.ImgEl.style.left = 0;
    }
    else if (imgPos === 'right') {
      this.ImgEl.style.right = 0;
    }
    else {
      this.ImgEl.style.left = 50;
    }
    this.appendChild(this.ImgEl);

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
    observer.observe(this.ImgEl);

    this.querySelectorAll('span[eligible="true"]').forEach((el) => {
      // mouse events
      el.onmouseenter = () => {
        const randColor = [
          Colour.persimmonLow,
          Colour.iceBlueLow,
          Colour.sageLow,
          Colour.persimmon,
          Colour.iceBlue,
          Colour.sage,
        ];
        el.style.color = randColor[Math.floor(Math.random() * randColor.length)];
        el.style.fontSize = '14em';
        el.parentElement.style.zIndex = '2';
      }

      el.onmouseleave = () => {
        el.style.color = Colour.white;
        el.style.fontSize = '10em';
        el.parentElement.style.zIndex = '0';
      }

      el.onclick = () => {
        console.log('click', el.textContent);
        window.location.href = `/${el.textContent.toLowerCase()}`;
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // handle the showing attribute changes
    if (name === 'showing') {
      if (newValue === oldValue) return;
      if (newValue === 'true' && oldValue === 'false') {
        const lineEls = this.linesContainer.children;
        for (const lineEl of lineEls) {
          lineEl.style.opacity = 1;
          lineEl.style.transform = 'translateX(0px)';
        }
        this.ImgEl.style.transform = 'translateX(0px)';
      }
      else if (newValue === 'false' && oldValue === 'true') {
        const lineEls = this.linesContainer.children;
        for (const lineEl of lineEls) {
          lineEl.style.opacity = 0;
          (lineEl.getAttribute('line') % 2 === 0)
            ? lineEl.style.transform = 'translateX(-200px)'
            : lineEl.style.transform = 'translateX(200px)';
        }
        this.ImgEl.style.transform = 'translateY(200px)';
      }
    }
  }
}


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




customElements.define('mj-section', MjSection);
customElements.define('mj-section-textalone', MjSectionTextalone);
customElements.define('mj-section-dual', MjSectionDual);
customElements.define('mj-section-work', MjSectionWork);
