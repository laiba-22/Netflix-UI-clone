import { ChevronRight } from 'lucide-react'
import bgimg from '../assets/netflix-bg.jpg'
import logo from '../assets/logo.png'

function Nav()
{

    return(

        <>
            <div className="px-8 py-5 pt-5 bg-black b text-white " >

                <div className='absolute inset-0 bg-cover bg-center opacity-25 ' style={{backgroundImage: `url(${bgimg})`}} ></div>

                <div className="flex justify-between items-center relative" >

                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-10" />

                    <div className="flex">
                        
                        <button className="bg-red-600 px-4 py-1.5 rounded font-bold mt-2 hover:bg-red-700 text-[13px]">Sign In </button>
                    </div>
                </div>

                <div className="py-30 flex flex-col items-center relative">

                    <div className="text-6xl font-bold w-150 text-center ">
                        Unlimited movies, TV shows and more
                    </div>
                    

                    <div className="py-5 font-bold text-2xl ">
                         The first rule of netflix is that we do not speak about netflix
                    </div>

                    <p>Ready to join? Give us your soul and also your email </p>

                    <div className="py-5 flex items-center gap-4">
                        <input className="border p-1 border-gray-500 pr-30 mr-5 h-15 w-100 rounded backdrop-blur-sm"  type="text" placeholder="Email Adress"/>
                        <button className="bg-red-600 p-1 rounded px-5 h-15 text-2xl font-bold flex items-center gap-2 hover:bg-red-700"> Get Started <ChevronRight/> </button>
                    </div>
                </div>
                
            </div>

             

        </>

    )
}

export default Nav