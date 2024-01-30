


export function WorkCard({title, position, description, image, link}) {
  return (
    <a id="work-card-link-container" className="flex flex-row w-3/4 h-80 l2xl:h-64
      justify-between items-center shadow-lg shadow-orange-500/5 bg-darktheme-l1
      animate-slideu transition-transform hover:scale-105 overflow-hidden rounded-3xl
      m-10" href={link} target="_blank" >
      <article id="work-card-content" className="flex flex-col w-full l2xl:w-3/4 h-full
        p-5
        justify-evenly items-start">
        <h1 id="work-card-title" className="font-serif text-3xl l2xl:text-5xl
          2xl:text-5xl text-ocretheme-l3">
          {title}
        </h1>
        <p id="work-card-position" className="font-mono font-semibold text-sm
          l2xl:text-lg 2xl:text-2xl text-ocretheme-l1">
          {position}
        </p>
        <p id="work-card-description" className="font-sans text-md l2xl:text-xl
          2xl:text-3xl text-ocretheme-l2">
          {description}
        </p>
      </article>
      <img id="work-card-image" className="collapse l2xl:visible w-1/3 h-auto 
        -translate-y-10 transition-transform hover:scale-125" src={image}/>
    </a>
  )
}


export function SkillCard({skill, description, image, stack, imageToLeft, imageToRight}) {

  const imageHtml = (
    <img id='skill-img-reference' className='collapse sm:visible absolute 3xl:static z-0
      opacity-10 3xl:opacity-100 w-auto h-fit 3xl:h-[500px]'
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
      lxl:h-[500px] my-5 animate-slided overflow-hidden'>
      {leftSide}
      <div id="skill-content" className='relative 3xl:static z-10 p-7 lxl:p-10 
        bg-gradient-radial from-transparent to-darktheme-l3'>
        <h1 id='skill-title' className='font-serif text-ocretheme-l3 text-2xl text-center
          lxl:text-start lxl:text-5xl 5xl:text-7xl'>
          {skill}
        </h1>
        <p id='skill-description' className='font-sans text-ocretheme-l2 text-md
          lxl:text-3xl 5xl:text-5xl pt-2 lxl:pt-10'>
          {description}
        </p>
        <p id='skill-stack' className='font-mono text-ocretheme-l1 text-lg lxl:text-xl
          5xl:text-3xl pt-2 lxl:pt-10'>
          {stack}
        </p>
      </div>
      {rightSide}
    </article>
  )
}
