

import DropDown from "@components/DropDown";

import {
    Book,
    BookMarked,
    CheckSquare,
    GraduationCap,
    LayoutDashboard,
    List,
    MessageCircle,
    PlusIcon,
    Receipt,
    SettingsIcon,
} from "lucide-react";


export default


    [
        {
            "id": 1,
            "route": "/Admin",
            "icon": LayoutDashboard,
            "alert": true,
            "text": "Dashboard",
            "element": "a"
        },
        {
            "id": 2,
            "handleClick":{DropDown},
            "icon": GraduationCap,
            "text": "Students",
            "alert": false,
            "element": "a"
        },
        {
            "id": 3,
            "icon": { List },
            // "route": "/Admin/Students",
            "text": "List",
            "alert": false,
            "element": "a"
        },

        {
            "id": 4,
            "icon":Book,
            "text": "Teachers",
            "alert": false,
            "element": "a"
        }
    ]