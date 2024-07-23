import Image from "next/image";
import { Button } from "@/components/ui/button"

const FifthSection=()=>{
    return(

        <section className="bg-gradient-to-r from-green-50 to-green-100  md:py-70 py-20 my-5 mx-3  space-x-32 rounded-2xl flex "  >
            
            <div className="container mx-auto  flex flex-col justify-between">
                
            <div className="flex flex-col">
                <div>
                <p className="text-black text-base items-center md:px-20 pb-10">Let your friends, family and co-workers(ananymously) rate your skills.</p>
                <p className="text-4xl  space-y-5 font-extrabold md:px-20 pb-10 text-black  space-x-5 " > Ever wonder what others think of you</p>
                
                </div> 
                <div className="w-auto text-orange-400 flex flex-row">
                
                <div className="md:px-20  mt-10  flex flex-row gap-5 bg-inherit" >
                    <div className="text-black text-sm"> <Image src="/images/emotions/meda.jpeg" alt="app" height={20} width={20} className="mix-blend-multiply" /> Answer question on your social skills</div>
                    
                </div>
                <div className="md:px-20  mt-10  flex flex-row gap-5 bg-inherit" >
                    <div className="text-black text-sm"> <Image src="/images/emotions/meda.jpeg" alt="app" height={20} width={20} className="mix-blend-multiply" /> Let others ananymously answer the <br/> same question about you</div>
                    
                </div>
                <div className="md:px-20  mt-10  flex flex-row gap-5 bg-inherit" >
                    <div className="text-black text-sm"> <Image src="/images/emotions/meda.jpeg" alt="app" height={20} width={20}  className="mix-blend-multiply"/> Find out where you are and others<br/> stand out the way and where not!</div>
                    
                </div></div>
                
            </div>
            <div className="container bg-white  flex flex-row mt-20 justify-center items-center h-32 w-full">
            <div className="  md:flex md:space-x-3">
            <Button className="font-bold text-white bg-blue-400 hover:bg-slate-600 rounded-full">You</Button>
            <Button className="font-bold text-white bg-purple-400 hover:bg-slate-600 rounded-full">Ananymous1</Button>
            <Button className="font-bold text-white bg-orange-200 hover:bg-slate-600 rounded-full">Ananymous2</Button>
            <Button className="font-bold text-white bg-green-200 hover:bg-slate-600 rounded-full">Ananymous3</Button>
            </div>
                </div>   
                
             </div>          
        </section>
    );
};
export default FifthSection;