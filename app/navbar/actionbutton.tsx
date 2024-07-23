import { Button } from "@/components/ui/button"
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { MdDehaze } from "react-icons/md";
const ActionButtons=()=>{
    return(

        <div>
            
            
            <div className="md:hidden">
                <Sheet>
                <SheetTrigger><MdDehaze /></SheetTrigger>
                <SheetContent className="bg-slate-100 ">
                <SheetHeader>
                <SheetDescription >
                    <div className="flex flex-col space-y-4  items-start w-full mt-10 font-bold text-base text-black">
                        <Link href="/">Download App</Link>
                        <Link href="/">Emotions</Link>
                        <Link href="/">Manifesto</Link>
                        <Link href="/">Self awareness test</Link>
                        <Link href="/">Work with us</Link>

                        {/* <a href="/">Download App</a>
                        <a href="/">Emotions</a>
                        <a href="/">Manifesto</a>
                        <a href="/">Self awareness test</a>
                        <a href="/">Work with us</a> */}
                    </div>
                        
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>

            </div>
            <div className=" hidden md:flex md:space-x-3">
            <Button className="font-bold text-white bg-black hover:bg-slate-600 rounded-full">Download App</Button>
            </div>
        </div>
    );
};
export default ActionButtons;