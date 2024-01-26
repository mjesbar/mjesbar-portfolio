
import { Background, SpecialSign } from '../page.js'


function WorkCard({title, position, description, image, link}) {
  return (
    <a id="work-card-link-container" className="flex flex-row justify-between
      items-center shadow-lg shadow-orange-500/5 bg-darktheme-l1 animate-slideu
      transition-transform hover:scale-105 w-full h-64 overflow-hidden rounded-3xl"
      href={link} target="_blank" >
      <article id="work-card-content" className="flex flex-col w-3/4 h-full p-5
        justify-evenly items-start">
        <h1 id="work-card-title" className="font-serif text-5xl text-ocretheme-l3">
          {title}
        </h1>
        <p id="work-card-position" className="font-mono font-bold text-lg
          text-ocretheme-l1">
          {position}
        </p>
        <p id="work-card-description" className="font-sans text-2xl text-ocretheme-l2">
          {description}
        </p>
      </article>
      <img id="work-card-image" className="w-1/4 h-fit -translate-y-10
        transition-transform hover:scale-125" src={image}/>
    </a>
  )
}

export default function Work() {
  return (
    <>
      <Background/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <SpecialSign text1="Miguel Bello" text2="mjesbar"/>
      </header>
      
      <main className="grid grid-cols-1 w-2/3 h-full mx-auto place-content-start
        place-items-center animate-appear100 gap-5">
        <h1 className="p-10 font-serif text-ocretheme-l1 text-4xl text-center
          lxl:text-6xl">
          Recent Works
        </h1>
        <WorkCard title="Erickson Stock" position="Backend Developer"
          description="As Backend developer I built the custom API functions & AI tools,
          all these wrapped by the Woocommerce, Wordpress & Daminion RestAPI. Also has a 
          syncyng service as background service, easing to update of resources in the
          webpage." image="ericksonstock-collage.png" link="https://ericksonstock.com/"/>
        <WorkCard title="Mjesbar Portfolio" position="Frontend Developer"
          description="Since I originally was just Backend speciallized, this becomes my
          first Frontend oriented experience." image="profile-thumbnail.png"
          link="https://google.com"/>
      </main>
    </>
  )
}
