import Logo from "./logo";
import { NavigationBar } from "./navigationbar";
import ActionButtons from "./actionbutton";

const Navbar=()=>{
    return(

        <div className="bg-white
         flex justify-between items-center px-3 border-b-40">
            <Logo />
            <NavigationBar />
            <ActionButtons />
            
        </div>
    );
};
export default Navbar;



