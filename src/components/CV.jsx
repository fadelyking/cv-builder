
export default function CV(props) {
    console.log(props.name)
    return (
        <div className="cv-container">
            <div className="general-info-container">
                <div className="info">
                    <li>{props.name}</li>
                    <li>{props.email}</li>
                    <li>{props.number}</li>
                </div>
            </div>
            <div className="education-info-container"></div>
            <div className="experience-info-container"></div>
        </div>
    )
}

