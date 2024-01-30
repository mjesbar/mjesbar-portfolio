
import { Background, SpecialSign } from '../page.js'
import { SkillCard, WorkCard } from './work.jsx'



export default function Work() {
  return (
    <div>
      <Background/>

      <header className="flex w-full h-32 5xl:h-52 justify-evenly items-center">
        <SpecialSign text1="mjesbar" text2="dev"/>
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
          link="https://mjesbar.dev"/>
      </main>
    </div>
  )
}
