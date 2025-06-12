import students from "@data/students";
import StudentProfile from "./page";


export default function StudentProfileLayout(){
    return(
        <>
        <StudentProfile students={students}/>
        </>
    )
}