
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
      <img className="opacity-5 w-full h-auto absolute -z-50" src="background.jpg"
        alt="background-image"/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <div className="flex w-80 h-1/2 justify-center gap-1">
          <span className="self-start font-serif text-ocretheme-l1 text-sm lg:text-xl
            animate-slidexl">
            MiguelBello
          </span>
          <bold className="self-center font-bold text-4xl">·</bold>
          <span className="self-end font-mono text-ocretheme-l3 text-sm lg:text-xl animate-slidexr">
            mjesbar
          </span>
        </div>
        <div className="shrink lg:w-80 sm:w-0 h-full"></div>
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

      <main className="flex flex-row w-full h-full justify-center items-start">
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
        <span className="text-slate-700">© 2021 MiguelBello</span>
      </footer>  
    </>
  )
}
