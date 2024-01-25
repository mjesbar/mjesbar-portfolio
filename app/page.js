
// Background Component
export function Background() {
  return (
    <img className="w-full h-auto absolute -z-50 animate-appear opacity-5"
      src="background.jpg" alt="background-image"/>
  )
}

export function SpecialSign({ text1, text2 }) {
  return (
    <a className="flex w-80 h-1/2 justify-center gap-1 text-sm transition-all ease-out
      duration-100 hover:scale-105 hover:text-orange-500 hover:text-9xl hover:h-full" href="/">
      <span className="self-start font-serif text-ocretheme-l1 text-sm lg:text-xl
        animate-slidexl">
        { text1 }
      </span>
      <bold className="self-center font-bold">·</bold>
      <span className="self-end font-mono text-ocretheme-l3 text-sm lg:text-xl animate-slidexr">
        { text2 }
      </span>
    </a>
  )
}

function SocialMediaIcon({link, image, description}) {
  return (
    <a className="flex w-10 lg:w-12 h-auto transition-all ease-out duration-200 hover:scale-125
      animate-slidexl"
      target="_blank" href={link}>
      <img src={image} alt={description}/>
    </a>
  )
}

function RedirectCard({text}) {
  return (
    <a className="capitalize font-serif text-ocretheme-l1 text-7xl text-center lxl:text-9xl
      lxl:text-left after:content-[''] after:block after:rounded-md after:bg-ocretheme-l3
      after:opacity-0 after:h-2 after:w-0 after:transition-all after:ease-in after:duration-200
      hover:after:opacity-100 hover:after:w-full transition-all ease-in duration-200
      hover:text-ocretheme-l3 hover:translate-x-5 hover:scale-105 animate-slidexr"
      href={`/${text}`}>
      {text}
    </a>
  )
}

export default function Home() {
  return (
    <>

      <Background/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <SpecialSign text1="Miguel Bello" text2="mjesbar"/>
        <div id="header-separator" className="shrink lg:w-80 sm:w-0 h-full"></div>
        <div className="flex w-80 h-auto justify-evenly items-center gap-2">
          <SocialMediaIcon link="https://www.instagram.com/mjesbar/" image="instagram.svg"
            alt="instagram-link" />
          <SocialMediaIcon link="https://www.linkedin.com/in/mdjba/" image="linkedin.svg"
            alt="linkedin-link" />
          <SocialMediaIcon link="https://wa.me/573046798036" image="whatsapp.svg"
            alt="whatsapp-link" />
          <SocialMediaIcon link="https://github.com/mjesbar" image="github.svg"
            alt="github-link" />
        </div>
      </header>

      <main className="flex flex-row w-full h-[65%] transition-all ease-out duration-300 lxl:h-[75%]
        justify-center items-start">
        <img className="collapse w-1/2 h-auto lxl:max-w-768 lxl:h-auto lxl:visible animate-slidexl"
          src="profile-photo.png" alt="profile-image"/>
        <div className="flex flex-col w-1/2 h-auto gap-5 mt-32 items-center lxl:items-start
          lxl:w-512">
          <RedirectCard text="work"/>
          <RedirectCard text="about"/>
          <RedirectCard text="contact"/>
        </div>
      </main>

      <footer>
        <span className="inline-block w-full h-auto transition-all ease-out duration-300
          lxl:ml-[20%] text-center align-middle text-slate-800">
          2024 Miguel Bello · Full Stack Developer · Colombia
        </span>
      </footer>  
    </>
  )
}
