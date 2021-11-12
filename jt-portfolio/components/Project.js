
export default function Project(props) {
    return (
        <div className="w-3/4 m-auto py-10 md:py-24">
            <p id={props.projName} className="border-b-2 border-orange text-xl"><strong>{props.projName}</strong></p>
            <p className="text-sm"><em>Technologies: {props.tech}</em></p> <br />
            <div>{props.info}</div>
            <div className="border-b-2 border-orange mt-5"></div>
            <div className="border-b-2 border-orange mt-2 mb-10"></div>
        </div>
    )
}