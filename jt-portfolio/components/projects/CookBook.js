import Project from '../Project'
import Image from 'next/image'

export default function CookBook() {
    function getInfo() {
        return (
            <div>
                <p><strong>Description:</strong></p>
                <p>
                    &emsp;CookBook is a webapp I developed to store recipes organized into categories by using CRUD operations. I developed the frontend using 
                    NextJS and the backend using Django REST Framework.
                </p> <br />
                <p>&emsp;On the first page, there is a list of categories which is fetched from the REST API. Each category card 
                    has an edit and a delete button. The edit button will open a form where you can edit each value of the category such as the name
                    and description. There is also a '+' button which will open up the same form that is used to edit a category but is used to
                    create a new category instead. Selecting the arrow on the category card will open a dynamically generated page displaying
                    all the recipes under that category. This page looks similar to the category page.
                </p><br />
                <p>
                    &emsp;Selecting a recipe will open up the full recipe page, where all the information of the recipe is displayed
                    in a user-friendly manner. The recipe may also be edited from this page.
                </p><br />
                <p>&emsp;Developing this webapp greatly improved my NextJS, Tailwind, and Django skills. The webapp can be viewed <a href="https://cook-book2-0.vercel.app/"><em>here</em></a></p>
                <div className="flex flex-col lg:flex-row">
                    <div className="p-3">
                        <Image src="/categories.png" width="802" height="803"/>
                        <p className="text-sm"><em>Categories Page</em></p>
                    </div>
                    <div className="p-3">
                        <Image src="/cookEdit.png" width="327" height="786"/>
                        <p className="text-sm"><em>Edit Recipe Form</em></p>
                    </div>
                    <div className="p-3">
                        <Image src="/recipe.png" width="805" height="805"/>
                        <p className="text-sm"><em>Full Recipe Page</em></p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="Cook Book">
            <Project 
                projName="Cook Book"
                tech="NextJS, Django REST, HTML/CSS, Tailwind, Vercel, Heroku"
                info={getInfo()}
            />
        </div>
    )
}