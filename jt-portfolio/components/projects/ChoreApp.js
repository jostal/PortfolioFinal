import Project from "../Project"
import Image from 'next/image'

export default function ChoreApp() {

    function getInfo () {
        return (
            <div>
                <p><strong>Description:</strong></p>
                <p>&emsp;Chore App is a web app I developed so my roommates and I can easily view when and by who chores must be done as well as
                    what that chore entails. This project was developed using ReactJS for the frontend and ExpressJS to create a REST API and perform the logic required
                    to convert a .csv file into a readable, user-friendly format on the webpage. 
                </p>
                <br />

                <p><strong>The Backend:</strong></p>
                <p>&emsp;The backend (written in ExpressJS) has two functions:</p>
                <ol className="ml-2">
                    <li>1) Convert local csv data into JSON format</li>
                    <li>2) Serve JSON data as a REST API for the frontend</li>
                </ol>
                <div className="flex flex-wrap py-4">
                    <div className="flex flex-col py-2 md:px-5">
                        <Image src="/ChoreCalendar.png" width="525" height="800"/>
                        <p className="text-sm"><em>original .csv file</em></p>
                    </div>
                    <div className="flex flex-col py-2 md:px-5">
                        <Image src="/ChoreJSON.png" width="525" height="800"/>
                        <p className="text-sm"><em>csv converted into JSON formated and served as REST API</em></p>
                    </div>
                </div>
                <p className="pt-4"><strong>The Frontend:</strong></p>
                <p>&emsp;The frontend (written using ReactJS) fetches the JSON data from the created REST API and converts it into a readable, user-friendly format using html tables and lists.</p>
                <p className="py-2">&emsp;Once the application was completed, I used Heroku to host and backend and the frontend as seperate applications. This app (found <em><a href="https://chorescicero.herokuapp.com/">here</a></em>) is currently
                used by my roommates and I to keep track of our weekly chores. The chores have been easily edited since it's original creation by simply replacing the csv files.</p>
                <div className="flex flex-col py-2">
                    <Image src="/ChoreSite.png" width="1920" height="1000"></Image>
                    <p className="text-sm"><em>Chore website</em></p>
                </div>
            </div>
        )
    }

    return (
        <div id="Chore App">
            <Project projName="Chore App" tech="ReactJS, ExpressJS, HTML/CSS, Heroku" info={getInfo()} />
        </div>
    )
}