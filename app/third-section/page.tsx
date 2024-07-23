import Image from "next/image";

const ThirdSection=()=>{
    return(

        <section className="bg-gradient-to-r from-pink-200 to-pink-300  md:py-70 py-20 my-5  space-x-32 mx-3 rounded-2xl   overflow-hidden"  >
            {/* <div className="container mx-auto  flex  justify-between"> */}
            <div className="flex flex-col container mx-auto">
                <div>
                <p className="text-black text-base  md:px-20 ">Built out of frustration</p>
                <p className="text-5xl  space-y-5 font-extrabold md:px-20 pb-10 text-black bg-clip-text space-x-5 " >Meet the Ahead App</p>
                </div>
                
                <div className="flex flex-row w-auto justify-between  " > 
                    {/* justify-between items-center */}
                    <div className="relative w-full max-w-full mt-20 md:pb-8">
                       <div className="absolute -top-6 left-20 w-64 h-64 bg-purple-200  rounded-full mix-blend-multiply  filter opacity-70 blur-sm animate-blob"></div>
                       <div className="absolute -top-0.1 left-40 w-72 h-72 bg-blue-200 rounded-full   "></div>
                       <div className="absolute top-5 left-44 -right-20 w-60 h-60 bg-white rounded-full   "></div>
                        <Image src="/images/emotions/logo.svg" alt="third" height={130} width={130} className="absolute top-12 left-56 -right-20  "/>
                        <Image src="/images/emotions/meda.jpeg" alt="third" height={70} width={50} className="absolute top-1 left-64  mix-blend-multiply animate-pulse "/>
                        <Image src="/images/logos/sc.png" alt="third" height={20} width={50} className="absolute -right-16 top-36  -rotate-45 mix-blend-multiply animate-pulse "/>
                        <Image src="/images/emotions/concen.png" alt="third" height={20} width={50} className="absolute -right-10 top-48  -rotate-45 mix-blend-multiply animate-pulse "/>
                        <Image src="/images/emotions/concen.png" alt="third" height={20} width={50} className="absolute -right-32 top-20  -rotate-45 mix-blend-multiply animate-pulse "/>
                
                
                </div>
      
                    <div className="flex ">
                        <div className="container text-base  space-y-5  top-16 text-black  mb-70 left-96 text-pretty" >
                            A personalized pocket that provides bite- <br/>sized, science driven tools to boost emotional <br/> intelligence.</div>
                            <div className=" text-base  space-y-5 md:px-20 pb-10">Think of it as a pocket cheerleader towards a <br/>better, more fulfilling</div>
                
                    </div> 
                </div>
                   
                
             </div>        
             
        </section>
        
    );
};
export default ThirdSection;