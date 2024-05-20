import { openSans, inter, merriweatherSans, bitter, merriweather, domine, robotoMono, ubuntuMono, ptMono } from "./fonts.js";
import "./globals.css";


export const metadata = {
  title: "mjesbar",
  description: "Welcome to my portfolio! I'm a versatile Full Stack Web Developer with a knack for building engaging and efficient web applications. With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless online experiences. From crafting intuitive user interfaces using HTML, CSS, and JavaScript to implementing robust server-side logic with Node.js and Python, I bring a well-rounded approach to web development. Explore my portfolio to see some of my recent projects and discover how I can help you bring your digital ideas to life.",
  keywords: "web developer, full stack, front end, back end, javascript, react, node, python, django, portfolio, mjesbar",
};

export default function RootLayout({ children }
) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords}/>
        <meta name="author" content="mjesbar"/>
        <meta name="theme-color" content="#1c1c1c"/>
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content="https://mjesbar.dev/meta-image.png"/>
        <meta property="og:url" content="https://mjesbar.dev"/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/meta-image.png" sizes="any"/>
      </head>
      <body className={`
        ${openSans.variable}
        ${inter.variable}
        ${merriweatherSans.variable}
        ${bitter.variable}
        ${merriweather.variable}
        ${domine.variable}
        ${robotoMono.variable}
        ${ubuntuMono.variable}
        ${ptMono.variable}
        `}>
        {children}
      </body>
    </html>
  );
}
