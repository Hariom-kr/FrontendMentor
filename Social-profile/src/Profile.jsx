import profile from "./assets/avatar-jessica.jpeg"

const links =["Github", "Fronted Mentor", "Linkedin", "Twitter", "Instagram"];

const Profile = () => {
  return (
    <div className="bg-[hsl(0,0%,12%)] text-white rounded-2xl w-96 p-8">

      <div className="flex justify-center items-center">
       <img className="rounded-full h-24 "src={profile} alt="pic"/>
      </div>

      <div className='font-bold space-y-3 flex flex-col text-center'>
        <h1 className=" text-3xl mt-7">Jessica Randall</h1>
        <p className="text-[hsl(75,94%,57%)] ">London, United Kingdom</p>
        <p className="mt-4 text-gray-300">*Front-end developer and avid reader.*</p>
      </div>
      
      <div className="flex flex-col gap-4 mt-6 mb-2.5 ">
        {links.map((items)=>(
          <button className='rounded-lg  bg-[hsl(0,0%,20%)] w-full py-3' key={items}>{items}</button>
        ))}
      </div>

      </div>
  )
}

export default Profile