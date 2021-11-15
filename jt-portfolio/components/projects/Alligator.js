import Project from "../Project"
import ReactPlayer from "react-player"

export default function Alligator() {
    function getInfo() {
        return (
            <div className="inline-flex flex-wrap">
                <div className="lg:hidden">
                    <ReactPlayer url="https://www.youtube.com/watch?v=8wz0tGzB4mc" controls="true" width="100%" height="100%"/>
                </div>
                <div className="hidden lg:block">
                    <ReactPlayer url="https://www.youtube.com/watch?v=8wz0tGzB4mc" controls="true"/>
                </div>
                <div className="lg:w-1/3 lg:px-4">
                    <p className="py-2">&nbsp;This was the final design project for my Design 2 (ENGG*2100) course. It was a group project which required us to design, assemble,
                    and animate a kinder egg toy capable of converting potential energy into kinetic energy. We werer also required to perform a cost and market analysis,
                    as well as produce a commerical advertising the toy. We also delivered a business presentation pitching our toy to "Kinder" (our prof and TA's)
                    and wrote a professional design report.
                    </p>
                    <p className="py-2">&nbsp;I was responsible for writing much of the design report, including the executive summary, introduction, methodology, and conclusions.
                    I also produced the commerical.
                    The writing I did for this report really highlighted and improved my written and technical communication abilities.
                    </p>
                    <p className="py-2">&nbsp;Working on this project greatly improved my SolidWorks abilites, especially when it comes to animation.</p>
                </div>
            </div>
        )
    }

    return (
        <div id="Engineering Design 2 Final Project - Alligator Accelerator">
            <Project 
                projName="Engineering Design 2 Final Project - Alligator Accelerator" 
                tech="SolidWorks, OpenShot Video Editor"
                info={getInfo()}
            />
        </div>
    )
}