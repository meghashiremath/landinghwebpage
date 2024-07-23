import Image from "next/image";
import { Button } from "@/components/ui/button";

const SixthSection=()=>{
    return(

        <section className="bg-white md:py-70 py-20 my-5 mx-3  space-x-32 rounded-2xl flex "  >
            
            <div className="container mx-auto  flex flex-row justify-between text-center items-center">
                
            <div className="flex flex-col"><div>
                <p className="text-black text-base  md:px-20 pb-10">We take privacy seriously</p>
                <p className="text-6xl  space-y-5 font-extrabold md:px-20 pb-10 text-black bg-clip-text space-x-5 " > Before you get started</p>
                <p className="text-xl  space-y-5 font-extrabold md:px-20 pb-10 text-black bg-clip-text space-x-5 " > we wont share your answers with anyone (and wont ever tell you which friend said what about you) </p>
                <p className="text-xl  space-y-5 font-extrabold md:px-20 pb-10 text-black bg-clip-text space-x-5 " > with Love</p>
               <div className="flex justify-center animate-pulse"> <div><Image src="/images/emotions/sign.png" alt="sign" className="space-x-16 mix-blend-multiply " height={100} width={200} /></div>
               </div> <div className=" md:flex md:space-x-3 justify-center items-center">
            <Button className="font-bold text-white bg-black hover:bg-slate-600 rounded-full">Start the test</Button>
            </div>
                </div> 
                
                </div>
                
             </div>         
        </section>
    );
};
export default SixthSection;
