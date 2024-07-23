import Image from "next/image";

const SecondSection=()=>{
    return(

        <section className="  md:py-70 py-20 my-5 mx-3  space-x-32 rounded-2xl flex "  >
            <div className="container mx-auto  flex flex-col">
                <div className="flex  flex-row justify-between gap-6 text-pretty justify-items-start mb-20">
                    
                        <p className="text-black text-4xl font-bold  text-pretty max-w-md w-auto">EQ beats IQ</p>               
                        <span><p className="text-black text-base  ">People with high emotional <br/> intelligence(EQ) live more fullfilled <br/> lives.They tend to be happier and <br/> have healthier relationship</p></span>   
                        <span><p className="text-black text-base 2">They are more successful in their <br/> persuits and make for inspiring <br/> leaders. According to science, they<br/> earn $29k a year</p></span>      
                    
                    
                </div>
                <div className=" bg-inherit text-black text-4xl font-extrabold mt-25 mb-5 flex">Does this sound familiar.... <span className=" flex space-x-5 animate-bounce  " ><Image src="/images/emotions/logo.svg" alt="logo" height={40} width={80} className="mix-blend-multiply"/></span></div>    
                <div className="flex space-x-16 overflow-hidden">
                   <div className=" flex space-x-5 animate-loop-scroll  ">
                    <Image src="/images/emotions/one 1.png"  alt="one" height={300} width={300} className="max-w-none"/>
                    <Image src="/images/emotions/one 2.png"  alt="one" height={300} width={300} />
                    <Image src="/images/emotions/one3.png"  alt="one" height={300} width={300} />
                    <Image src="/images/emotions/one 4.png"  alt="one" height={300} width={300} className="rotate-6" />
                    <Image src="/images/emotions/one 1.png"  alt="one" height={300} width={300} className="max-w-none"/>
                    <Image src="/images/emotions/one 2.png"  alt="one" height={300} width={300} />
                    <Image src="/images/emotions/one3.png"  alt="one" height={300} width={300} />
                    <Image src="/images/emotions/one 4.png"  alt="one" height={300} width={300}  className="rotate-6"/>
                    </div>
                    

                    
                </div>  
             </div>             
        </section>
    );
};
export default SecondSection;