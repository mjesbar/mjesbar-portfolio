// Sans Fonts
import { Open_Sans, Inter, Merriweather_Sans } from "next/font/google";
// Serif Fonts
import { Bitter, Merriweather, Domine } from "next/font/google";
// Mono Fonts
import { Roboto_Mono, Ubuntu_Mono, PT_Mono  } from "next/font/google";


export const openSans = Open_Sans({
  weight: '400',
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  weight: '400',
  variable: "--font-inter",
  subsets: ["latin"],
});

export const merriweatherSans = Merriweather_Sans({
  weight: '300',
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});


export const bitter = Bitter({
  weight: "400",
  variable: "--font-bitter",
  subsets: ["latin"],
});

export const merriweather = Merriweather({
  weight: "400",
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const domine = Domine({
  weight: "400",
  variable: "--font-domine",
  subsets: ["latin"],
});


export const robotoMono = Roboto_Mono({
  weight: "400",
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const ubuntuMono = Ubuntu_Mono({
  weight: "400",
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
});

export const ptMono = PT_Mono({
  weight: "400",
  variable: "--font-pt-mono",
  subsets: ["latin"],
});
