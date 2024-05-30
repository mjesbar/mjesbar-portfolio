// The general structure of a web component in JavaScript:

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Initialize the component's properties and state
    this.state = {
      value: true,
    };

    // Add event listeners
    this.onclick = () => {
      this.state.value = !this.state.value;
      console.log("state: ", this.state.value);
    }
  }

  connectedCallback() {
    // Called when the component is added to the DOM
    // Perform setup tasks, such as adding event listeners
    this.style.display = 'flex';
    this.style.position = 'relative';
    this.style.justifyContent = 'center';
    this.style.alignItems = 'center';
    const keyframes = [
      { opacity: 0.5, transform: "scale(0.9)" },
      { opacity: 1.0, transform: "scale(1.0)" },
      { opacity: 0.5, transform: "scale(0.9)" },
    ];
    const timing = {
      duration: 500,
      iterations: Infinity,
    };
    this.animate(keyframes, timing);
    this.shadowRoot.innerHTML += '<div>New Component!</div>';
    this.shadowRoot.innerHTML += `
            <div>
              This is my Web Component with animation!
            </div>
        `;
  }

  disconnectedCallback() {
    // Called when the component is removed from the DOM
    // Perform cleanup tasks, such as removing event listeners
  }
}

customElements.define('component-base', MyComponent);
