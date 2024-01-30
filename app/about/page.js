
import { SpecialSign, Background } from "../page.js";



export default function About() {
  return (
    <>
      <Background/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <SpecialSign text1="mjesbar" text2="dev"/>
      </header>

      <main className="grid grid-cols-1 mx-5 sm:mx-32 xl:mx-52 place-content-start
        place-items-center animate-appear100">
        <h1 className="p-10 font-serif text-ocretheme-l1 text-5xl text-center
          lxl:text-8xl">
          About
        </h1>
        <p className="p-5 sm:p-10 font-sans text-ocretheme-l1 text-center text-sm
          sm:text-2xl lxl:text-4xl">
          Hi! my name is Miguel Bello and I{"'"}m an Industrial Engineer specialized on
          digital products. Passionated for software development and design. I{"'"}m
          currently working as a backend developer at{" "}
          <a
            className="font-mono text-orange-400 hover:text-ocretheme-l3"
            href="https://ericksonstock.com/"
            target="_blank"
            rel="noopener noreferrer">
            Erickson Stock
          </a>
          , where I manage, mantain and improve the Resource Storage of the website, like
          images, photos, videos, documents. etc. I built the API the site use to upload,
          download and sync the stock for sale, as well as the use of AI API{"'"}s like
          OpenAI (chat-gpt3.5-4) to program automated tasks of tagging, editing, etc.
        </p>
        <p className="p-5 sm:p-10 font-sans text-ocretheme-l1 text-center text-sm 
          sm:text-2xl lxl:text-4xl">
          I{"'"}m available to receive any kind of work, task or project as a software
          either as a full-stack developer, so if you like my work and want to make great
          things, please feel free to{" "}
          <a className="font-mono text-orange-400 hover:text-ocretheme-l3"
            href="/contact"
            rel="noopener noreferrer">
            contact me
          </a>
        </p>
                
      </main>
    </>
  )
}
