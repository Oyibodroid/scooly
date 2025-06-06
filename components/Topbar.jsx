import { Bell, Focus } from "lucide-react";
import Button from "./Button";


function NotificationModal() {
    return(
        e
    )
}


const Topbar = () => {
    return ( 
        <div>
            <div className="flex justify-end items-center gap-4 p-4">
                <Button variant="primary" className="rounded-full "><Bell/></Button>
                <Button  variant="primary" className="rounded-full bg-white"><Focus/></Button>
            </div>
        </div>
     );
}
 
export default Topbar;