
function SocialMediaIcon({link, image, description}) {
  return (
    <a className="flex  w-10 lg:w-12 h-auto" target="_blank" href={link}>
      <img src={image} alt={description}/>
    </a>
  )
}


export default function Home() {
  return (
    <>
      <img className="opacity-5 w-full h-auto absolute -z-50"
        src="background.jpg" alt="background-image"/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <div className="flex w-80 h-1/2 justify-center gap-1">
          <span className="self-start font-serif text-ocretheme-l1 text-sm
            lg:text-xl">
            MiguelBello
          </span>
          <bold className="self-center font-bold text-4xl">·</bold>
          <span className="self-end font-mono text-ocretheme-l3 text-sm
            lg:text-xl">
            mjesbar
          </span>
        </div>
        <div className="shrink lg:w-80 sm:w-0 h-full"></div>
        <div className="flex w-80 h-auto justify-evenly items-center gap-2">
          <SocialMediaIcon link="https://www.instagram.com/mjesbar/"
            image="instagram.svg"
            alt="instagram-link" />
          <SocialMediaIcon link="https://www.linkedin.com/in/mdjba/"
            image="linkedin.svg"
            alt="linkedin-link" />
          <SocialMediaIcon link="https://wa.me/573046798036"
            image="whatsapp.svg"
            alt="whatsapp-link" />
          <SocialMediaIcon link="https://github.com/mjesbar"
            image="github.svg"
            alt="github-link" />
        </div>
      </header>

      <main className="flex flex-row w-full h-full justify-center items-start">
        <img className="collapse  lg:w-1/2 h-auto lg:visible
          l2xl:w-1/2 lxl:h-auto"
          src="profile-photo.png" alt="profile-image"/>
        <div className="flex flex-col w-1/2 h-auto gap-5 mt-32 items-center
          md:items-start">
          <a className="font-serif text-ocretheme-l1 text-7xl text-center
            md:text-9xl md:text-left"
            href="/work">
            Work
          </a>
          <a className="font-serif text-ocretheme-l1 text-7xl text-center
            md:text-9xl md:text-left"
            href="/contact">
            Contact
          </a>
          <a className="font-serif text-ocretheme-l1 text-7xl text-center
            md:text-9xl md:text-left"
            href="/about">
            About
          </a>
        </div>
      </main>

      <footer>
      </footer>  
    </>
  )
}
