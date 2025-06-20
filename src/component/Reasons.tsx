import { ArrowDownToLine, Monitor, Telescope, UserPen } from "lucide-react"


function Reasons()
{

    const reasons = [
        {
            "title":"Enjoy on your TV",
            "description":"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            "icon":<Monitor />
        },
        {
            "title":"Download your shows to watch offline",
            "description":"Save your favorites easily and always have something to watch.",
            "icon":<ArrowDownToLine />
        },
        {
            "title":"Watch everywhere",
            "description":"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            "icon":<Telescope />
        },
        {
            "title":"Create profiles for kids",
            "description":"Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            "icon":<UserPen />
        }
    ]

    return(

        <>
        <div className="pb-10">
            <div className=" font-bold text-2xl pb-5">
                More Reasons to Join
            </div>

            <div className=" flex gap-5">

                {reasons.map((reason)=>{
                    return(
                        <div className="relative w-[260px] py-6 px-4 rounded-2xl h-80 bg-gradient-to-br from-blue-950 to-gray-900 ">
                            <div className="font-bold text-2xl mb-2"> {reason.title} </div>
                    
                            <p className="text-gray-300 ">{reason.description}</p>
                            
                            <div className="text-8xl font-bold right-0 m-3 absolute bottom-0">
                                {reason.icon}
                            </div>
                        </div>
                    )
                })}

                
            </div>
        </div>
        </>

    )

}

export default Reasons