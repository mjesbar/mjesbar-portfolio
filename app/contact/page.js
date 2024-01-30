
import { Background, SpecialSign, SocialMediaIcon } from "../page.js"



export default function Contact() {
  return (
    <div>

      <Background/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <SpecialSign text1="mjesbar" text2="dev"/>
      </header>

      <main className="grid grid-cols-1 mx-10 sm:mx-52 place-content-start
        place-items-center animate-appear100">
        <h1 className="my-10 sm:my-14 text-5xl sm:text-8xl font-serif font-bold
          text-center text-ocretheme-l1">
          Contact me
        </h1>
        <p className="my-10 text-2xl font-sans font-bold text-center text-ocretheme-l1">
          If you want to contact me, you can do it through my social networks
          or by sending me an email to <span className="text-orange-400">
            miguedjba96@gmail.com</span>
        </p>
        <div className="flex w-96 my-10 sm:my-20 scale-150 h-auto
          justify-center items-center gap-5">
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
      </main>
    </div>
  )
}
