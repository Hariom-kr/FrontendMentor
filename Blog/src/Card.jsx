import illustrate from "./assets/illustration-article.svg"
import profile from "./assets/image-avatar.webp"

const Card = () => {
  return (
    <div className='bg-white rounded-2xl p-5 space-y-6  border-black border-2 shadow-[8px_8px_0_black]'>
  <img className='rounded-2xl' src={illustrate} alt='img'/> 
  <div className="w-28 card-bg font-bold text-sm px-4 py-1.5">
    Learning
  </div>
  <div>
    Published 21 Dec 2023
  </div>
  
  <div className="space-y-5">
    <h2 className="font-bold text-2xl">HTML & CSS foundations</h2>
    <p className="text-gray-700">
      These languages are the backbone of every <br/> website, defining structure,
      content, and <br/> presentation
    </p>
  </div>
  
  <div className="flex flex-wrap items-center gap-3">
    <img src={profile} className="w-14 h-14 rounded-full"/>
    <h2 className="font-bold">Greg Hooper</h2>
  </div>
</div>
  )
}

export default Card
