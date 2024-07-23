import Image from "next/image";

const FirstSection=()=>{
    return(

        <section className="bg-gradient-to-r from-blue-200 to-blue-400  md:py-70 py-20 my-5 mx-3  space-x-32 rounded-2xl flex "  >
            
            <div className="container mx-auto  flex flex-row justify-between">
                
            <div className="flex flex-col"><div>
                <p className="text-black text-base  md:px-20 pb-10">Ahead App</p>
                <p className="text-6xl  space-y-5 font-extrabold md:px-20 pb-10 text-black bg-clip-text space-x-5 " > Master your Life <br/>by mastering<br/> Emotions</p>
                
                </div> 
                
                <div className="md:px-20  mt-10  flex flex-row gap-5 bg-inherit" >
                    <div> <Image src="/images/logos/app.png" alt="app" height={50} width={150}  /></div>
                    <div className="text-xs space-y-0 "><Image src="/images/logos/sr.png" alt="star" height={100} width={90}  />100+ App store Review</div>
                </div>
                
            </div>
                <div className=" bg-transparent ">
                <Image src="/images/logos/mobile.jpg"alt="logo image" height={200} width={200}/>
                </div>    
                
             </div>          
        </section>
    );
};
export default FirstSection;