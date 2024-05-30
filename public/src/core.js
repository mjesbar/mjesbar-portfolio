
import { Colour } from '/src/palette.js';


const html = document.querySelector('html');
const htmlStyle = {
  width: '100%',
  height: 'auto',
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: Colour.smokyBlack,
  color: Colour.white,
};
Object.assign(html.style, htmlStyle);


const body = document.querySelector('body');
const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-start',
  margin: 0,
  padding: 0,
  border: 0,
  height: '400vh',
  backgroundColor: 'transparent',
};
Object.assign(body.style, bodyStyle);


document.documentElement.style.fontFamily = 'Monospace';
document.documentElement.style.fontSize = '12px';


window.onload = () => {
  console.log('Window loaded');
}
