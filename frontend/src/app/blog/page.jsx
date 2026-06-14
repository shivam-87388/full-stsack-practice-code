import Link from "next/link";
import { blogs } from "./data";


const blog = () => {
  return (
   <section className="text-gray-600 body-font bg-green-500">
    <h1 className=" flex justify-center items-center text-white mt-4 p-2.5 text-3xl font-bold ">Blogs</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
        {blogs.map((element)=>
        { 
            return(
      <div key={element.slug} className="p-4 md:w-1/3 bg-blue-500">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/720x400"
            alt="blog"
          />
          <div className="p-6 bg-white">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
           
          </div>
        </div>
      </div>
       );
        }) }
    </div>
  </div>
</section>

  )
}

export default blog;
