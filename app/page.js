
// Background Component
export function Background() {
  return (
    <img className="w-screen h-auto animate-appear10 opacity-10 fixed -z-20"
      src="background.jpg" alt="background-image"/>
  )
}

export function SpecialSign({ text1, text2 }) {
  return (
    <a className="flex w-80 h-1/2 justify-center gap-1 text-sm transition-all ease-out
      duration-100 hover:scale-105 hover:text-[140px] hover:h-4/6"
      href="./">
      <span className="self-start font-serif text-ocretheme-l1 text-sm lg:text-xl
        2xl:text-2xl 4xl:text-4xl
        animate-slidel">
        { text1 }
      </span>
      <bold className="self-center font-bold text-orange-600">
        ·
      </bold>
      <span className="self-end font-mono text-ocretheme-l3 text-sm lg:text-xl
        2xl:text-2xl 4xl:text-4xl animate-slider">
        { text2 }
      </span>
    </a>
  )
}

export function SocialMediaIcon({link, image, description}) {
  return (
    <a className="flex p-1 w-10 lxl:w-12 3xl:w-14 4xl:w-16 5xl:w-18 h-auto transition-all
      ease-out duration-100 hover:scale-110 animate-slidel" target="_blank" href={link}>
      <img src={image} alt={description}/>
    </a>
  )
}

export function RedirectCard({text}) {
  return (
    <a className="capitalize font-serif text-ocretheme-l1 text-7xl lxl:text-9xl
      3xl:text-[160px] 4xl:text-[180px] 5xl:text-[240px] text-center lxl:text-left
      after:content-[''] after:block after:rounded-md after:bg-ocretheme-l3
      after:opacity-0 after:h-2 after:w-0 after:transition-all after:ease-in
      after:duration-200 hover:after:opacity-100 hover:after:w-full transition-all
      ease-in duration-100 hover:text-ocretheme-l3 hover:translate-x-5 hover:scale-105
      animate-slider" href={`./${text}`}>
      {text}
    </a>
  )
}

export default function Home() {
  return (
    <div id="limited-container" className="w-full h-screen overflow-hidden">

      <Background/>

      <header className="flex w-full h-1/6 justify-evenly items-center">
        <SpecialSign text1="mjesbar" text2="dev"/>
        <div id="header-separator" className="shrink lg:w-1/3 sm:w-0 h-full"></div>
        <div className="flex w-80 h-auto justify-evenly items-center">
          <SocialMediaIcon link="https://www.instagram.com/mjesbar/"
            image="instagram.svg"
            alt="instagram-link" />
          <SocialMediaIcon link="https://www.linkedin.com/in/mdjba/"
            image="linkedin.svg"
            alt="linkedin-link" />
          <SocialMediaIcon link="https://wa.me/573046798036" image="whatsapp.svg"
            alt="whatsapp-link" />
          <SocialMediaIcon link="https://github.com/mjesbar" image="github.svg"
            alt="github-link" />
        </div>
      </header>

      <main className="flex flex-row w-full h-4/6 transition-all ease-out duration-300
        lxl:h-[75%] justify-center items-start">
        <img className="animate-appear100 transition-transform ease-in duration-200
          relative -z-10 collapse lxl:visible w-0 h-0 lxl:w-auto lxl:h-[130vh]
          -translate-y-[25vh]" src="profile-photo.png"
          alt="profile-image"/>
        <div className="flex flex-col w-full lxl:w-2/5 h-auto gap-5 my-auto items-center
          lxl:items-start">
          <RedirectCard text="work"/>
          <RedirectCard text="about"/>
          <RedirectCard text="contact"/>
        </div>
      </main>

      <footer className="flex w-full h-1/6 justify-between items-start">
        <div className="w-0 lxl:w-1/2 h-full collapse lxl:visible"></div>
        <span className="w-full lxl:w-1/2 h-full font-serif text-slate-800 text-center
          lxl:text-left text-md lxl:text-lg 4xl:text-2xl">
          2023 · Miguel Bello · FullStack Developer/Industrial Engineer · Colombia
        </span>
      </footer>
    </div>
  )
}
