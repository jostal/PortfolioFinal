import Project from "../Project"
import ReactPlayer from "react-player"

export default function Technic() {
    function getInfo() {
        return (
            <div className="inline-flex flex-wrap">
                <div className="md:hidden">
                    <ReactPlayer url="https://www.youtube.com/watch?v=rAA8V7fqaJI" controls="true" width="100%" height="100%"/>
                </div>
                <div className="hidden md:block">
                    <ReactPlayer url="https://www.youtube.com/watch?v=rAA8V7fqaJI" controls="true"/>
                </div>
                <div className="md:w-1/3 md:px-4">
                    <p className="py-2">&nbsp;This was a group project made for my ENGG*2100 course which required us to model, assemble, and animate a 240 piece Lego Technic Model.
                        The model had multiple moving parts, including tracks and gears which were all assembled from individually modelled parts.
                    </p>
                    <p className="py-2">&nbsp;We split the pieces to be modelled evenly, so I modelled around 60 pieces of the set using SolidWorks. I was also responsible for the animation of the
                            moving parts which includes the rotation of the excavator body, the shovel, and the arm.
                    </p>
                    <p className="py-2">&nbsp;Working on this project greatly improved my SolidWorks abilites, especially when it comes to animation.</p>
                </div>
            </div>
        )
    }

    return (
        <div id="Lego Technic Excavator - SolidWorks Design and Assembly">
            <Project 
                projName="Lego Technic Excavator - SolidWorks Design and Assembly" 
                tech="SolidWorks"
                info={getInfo()}
            />
        </div>
    )
}