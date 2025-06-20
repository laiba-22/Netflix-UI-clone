import { useState } from "react"

function Faq()
{

    const [showqs, setshowqs]=useState(null);

    const handleToggle = (index:any) => 
    {
        setshowqs((prevIndex) => (prevIndex===index ? null:index))
    }

    const questions=[
        {
            "qs":"What is Netflix?",
            "ans":"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            "qs":"How much does Netflix cost?",
            "ans":"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts."
        }
    ]

    return(
        <div className="h-screen">
            
            <div className=" font-bold text-2xl pb-5">
                 Frequently Asked Questions
            </div>

            {questions.map((question, index)=>{
                return(
                    <div className="">

                <div onClick={()=>{handleToggle(index)}} className=" cursor-pointer flex text-2xl bg-gray-900 p-5 justify-between relative hover:bg-gray-800">
                    <div className=''>
                        {question.qs}
                    </div>
                    <div className={`text-3xl font-bold absolute right-0 m-5 bottom-0 ${showqs===index ? "rotate-90 ": ""}`} >
                         {/* {showqs === index ? "x" : "+"} */}
                         x
                         
                    </div>
                </div>
                
                <div className={`text-2xl bg-gray-900 mt-1  overflow-hidden mb-2 ${showqs === index ? "max-h-[500px]" :"max-h-[0px]"} duration-500 px-5 mt-1 `}>
                    {question.ans}
                </div>

            </div>
                )
            })}

        </div>
    )
}

export default Faq

{/* <X /> <Plus /> */}