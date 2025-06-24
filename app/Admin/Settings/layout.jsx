import Breadcrumb from "@components/Breadcrumb";

export default function SettingsLayout({children}){
    return(
        <div className="main">
            <div className="flex justify-end py-4">
                <Breadcrumb/>
            </div>
            {children}
        </div>
    )
}