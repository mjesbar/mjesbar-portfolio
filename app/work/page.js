
import { Background, SpecialSign } from '../page.js'


function WorkCard({title, position, description, image, link}) {
  return (
    <a id="work-card-link-container" className="flex flex-row w-3/4 h-80 l2xl:h-64
      justify-between
      items-center shadow-lg shadow-orange-500/5 bg-darktheme-l1 animate-slideu
      transition-transform hover:scale-105 overflow-hidden rounded-3xl m-10"
      href={link} target="_blank" >
      <article id="work-card-content" className="flex flex-col w-full l2xl:w-3/4 h-full
        p-5
        justify-evenly items-start">
        <h1 id="work-card-title" className="font-serif text-3xl l2xl:text-5xl
          text-ocretheme-l3">
          {title}
        </h1>
        <p id="work-card-position" className="font-mono font-bold text-sm l2xl:text-lg
          text-ocretheme-l1">
          {position}
        </p>
        <p id="work-card-description" className="font-sans text-md l2xl:text-xl
          text-ocretheme-l2">
          {description}
        </p>
      </article>
      <img id="work-card-image" className="collapse l2xl:visible w-1/3 h-auto 
        -translate-y-10 transition-transform hover:scale-125" src={image}/>
    </a>
  )
}


function SkillCard({skill, description, image, stack, imageToLeft, imageToRight}) {

  const imageHtml = (
    <img id='skill-img-reference' className='collapse sm:visible absolute 3xl:static z-0
      opacity-10 3xl:opacity-100  w-fit h-fit 3xl:h-[450px]'
      src={image}>
    </img>
  )
  var leftSide = ''
  var rightSide = ''

  if (imageToLeft) {
    leftSide = imageHtml
  }
  else if (imageToRight) {
    rightSide = imageHtml
  }

  return (
    <article id='skill-card' className='relative flex flex-row w-full h-[350px]
      lxl:h-[450px] my-5 animate-slided overflow-hidden'>
      {leftSide}
      <div id="skill-content" className='relative 3xl:static z-10 p-7 lxl:p-10 
        bg-gradient-radial from-transparent to-darktheme-l3'>
        <h1 id='skill-title' className='font-serif text-ocretheme-l3 text-2xl text-center
          lxl:text-start lxl:text-5xl'>
          {skill}
        </h1>
        <p id='skill-description' className='font-sans text-ocretheme-l2 text-md
          lxl:text-3xl pt-2 lxl:pt-10'>
          {description}
        </p>
        <p id='skill-stack' className='font-mono text-ocretheme-l1 text-lg lxl:text-xl
          pt-2 lxl:pt-10'>
          {stack}
        </p>
      </div>
      {rightSide}
    </article>
  )
}


export default function Work() {
  return (
    <>
      <Background/>

      <header className="flex w-full h-32 justify-evenly items-center">
        <SpecialSign text1="Miguel Bello" text2="mjesbar"/>
      </header>

      <main className="grid grid-cols-1 place-content-start place-items-center
        animate-appear100">

        <h1 className="p-10 font-serif text-ocretheme-l1 text-5xl text-center
          lxl:text-8xl">
          Main Skills
        </h1>
        <SkillCard
          skill='API/RestAPI and Database Models'
          image='api-skill.png'
          description='You can get reliable well-optimized software weather
          WebAPI/RestAPI or Desktop Applications. Provided by modern frameworks in the
          tech industry like Django and ASP.NET. All connected to a consistent database 
          system if required.'
          stack='ASP.NET, Django, PostgreSQL, MySQL, MongoDB.'
          imageToLeft/>
        <SkillCard
          skill='Web Design'
          image='webdesign-skill.png'
          description='Weather you need a beautiful website to engage users or a full
          "call-to-action" landing page that encourage the growing of your business, it
          will be designed and created with the most creative tools, that frontend 
          developers have built.'
          stack='React.js, TailwindCSS, HTML, CSS, Javascript, Photoshop.'
          imageToRight/>
        <SkillCard
          skill='Data Pipelines and Cloud Services'
          image='data-skill.png'
          description='You can execute serverless tasks, storing your personal or 
          business data in remote servers who provider asure very well your data. Also
          you can get automized operations on-premise with the best performance and 
          consistency.'
          stack='AWS, Google Cloud, Airflow, Bash Shell, Python.'
          imageToLeft/>

        <h1 className="p-10 font-serif text-ocretheme-l1 text-5xl text-center
          lxl:text-8xl">
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
