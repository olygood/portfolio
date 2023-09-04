import './lienInfo.css'
export const LienInfo = (props) => {
    return (
        <div className="lienInfo_container">
            
            <ul>
                <li>{props.project_name}</li>
            </ul>
        </div>
    )
}
