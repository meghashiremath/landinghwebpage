import Image from "next/image";

const FourthSection=()=>{
    return(

        <section className="bg-white md:py-70 py-20 my-5 mx-3  space-x-32 rounded-2xl flex "  >
            
            <div className="container mx-auto  flex flex-col justify-between">
                
            <div className="flex flex-col"><div>
                <p className="text-black text-base  md:px-20 pb-10">Wrong with self improvement & how we are fixing it.</p>
                <p className="text-6xl  space-y-5 font-extrabold md:px-20 pb-10 text-black bg-clip-text space-x-5 animate-blob" > Self-improvement. Ugh..</p>
                
                </div> 
                
                
            </div>
                <div className="timeline  relative max-w-4xl mr-auto  flex flex-col box-content ml-60 after:contents after:absolute after:w-2 after:h-auto">
                    <div className="container relative w-full  items-end md:py-4 py-5 border-spacing-1">
                        <div className="textbox relative px-3 space-y-3 text-black">
                        <h2 className="event1 font-semibold">Old habits are hard to break</h2>
                        <p className="w-1/2">And bad behaviours die hard. Fortunelty we give you science backed techniques to use</p> 
                        </div>                   
                    </div>
                    <div className="container relative w-full md:py-4 py-5  items-center">
                        <div className="textbox relative px-3 space-y-3 text-black">
                        <h2 className="event1 font-semibold">you and your motivation doesnot have a long term relationship</h2>
                        <p className="w-1/2">Luckily, we can proactively prepare you for the marathon,not just the race. Effective, memorable exercises will help you to stick to your goals</p> 
                        </div>                   
                    </div>
                    <div className="container relative  w-full items-center md:py-4 py-5 border-spacing-1">
                        <div className="textbox relative px-3 space-y-3 text-black">
                        <h2 className="event1 font-semibold">Old habits are hard to break</h2>
                        <p className="w-1/2">And bad behaviours die hard. Fortunelty we give you science backed techniques to use</p> 
                        </div>                   
                    </div>
                    <div className="container relative w-full  md:py-4 py-5 items-center">
                        <div className="textbox relative px-3 space-y-3 text-black">
                        <h2 className="event1 font-semibold">you and your motivation doesnot have a long term relationship</h2>
                        <p className="w-1/2">Luckily, we can proactively prepare you for the marathon,not just the race. Effective, memorable exercises will help you to stick to your goals</p> 
                        </div>                   
                    </div>
                </div>
                <div className="flex flex-row mt-20 mb-10">
                    
                <div className="text-black text-xl font-bold  md:px-20 pb-10">Be the best you with EQ </div>
                <div className="text-base  space-y-5  md:px-20 pb-10 text-black  space-x-5 " >Not having your own emotions under control might be holding you back</div>
                <div className="text-base  space-y-5  md:px-20 pb-10 text-black  space-x-5 " > Aditionally not understanding those of othersstops you from being parent , friend you can be</div>
                
                   
                </div>
             </div>          
        </section>
    );
};
export default FourthSection;


