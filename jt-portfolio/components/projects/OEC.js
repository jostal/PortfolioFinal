import Project from "../Project"
import Image from 'next/image'

export default function OEC() {

    function getInfo() {
        return (
            <div className="md:flex w-full flex-wrap">
                <div className="flex flex-col md:w-2/3">
                    <p className="py-2">
                    &emsp;In OEC 2021, I collaborated with a partner to develop solutions for two re-engineering problem cases.
                    In the first case, we were tasked with repurposing a public space such as an arena or school into a medical center
                    to deal with hopsital overflow during the peak of the COVID-19 pandemic. We had to develop this solution to be easily removable and
                    with a budget of 3.5 million dollars. For the second case, we had to develop an alert system to notify remote residents with unreliable internet 
                    and cell reception in the Sudbury/Cottage Country area of incoming wildfires.
                    </p>
                    <p className="py-2">
                        <strong>Case 1:</strong>
                    </p>
                    <p>
                        &emsp;Our solution to the first problem was to reroute incoming ICU patients to a repurposed sports center (Worcester Arena). The patients would
                        initally be brought to the hospital and evaluated. If it is determined that the patient is in need of an ICU but still capable to transport,
                        they would be redirected to the sport center where they will be treated until it is safe for them to return home.
                        Our
                    </p>
                    <p className="py-2">
                        &emsp;Our solution met both conditions of being easily removable and kept under budget. It was estimated that around 33 patients could be treated at 
                        this repurposed facility for $3 450 500, greatly relieving local ICU's.
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col md:w-1/2">
                        <Image src="/costs.png" width="642" height="311" />
                        <p className="text-sm"><em>Solution costs</em></p>
                    </div>
                    <div className="flex flex-col py-2 md:w-1/2">
                        <Image src="/warena.png" width="1174" height="639" />
                        <p className="text-sm"><em>Plan to repurpose arena</em></p>
                    </div>
                </div>

                <div>
                    <p className="py-2"><strong>Case 2:</strong></p>
                    <p>
                        &emsp;Our solution to the second problem was to develop a portable alert device, which can be left in the homes are taken with
                        residents so they can always be aware of incoming wildfires. The device would have an RF switch, trigerred by a specific radio frequency depending
                        on the region the device is in and it's distance from the fire. Having the alert go off based on region would reduce panic and traffic congestion making a safer escape route
                        for all residents. The switch would sound an alarm, alerting residents on the incoming fire as well as start an FM radio broadcast notifying
                        residents of any road closures or unsafe routes in the area.<br />
                        &emsp;This device would effectively allow residents in areas affected by wildfires to safely and efficiently evacuate with minimal traffic congestion
                        and within reasonable time.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div id="Ontario Engineering Competition 2021">
            <Project 
                projName="Ontario Engineering Competition 2021"
                tech="N/A"
                info={getInfo()}
            />
        </div>
    )
}