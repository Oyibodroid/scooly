import Breadcrumb from "@components/Breadcrumb";

export default function SettingsLayout({children}){
    return(
        <div className="main">
            <div className="flex justify-between items-center p-4">
                <p className="heading text-2xl">Settings</p>
                <Breadcrumb/>
            </div>
            {children}
        </div>
    )
}