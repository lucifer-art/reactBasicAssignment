import './UserOutput.css'

const userOutput = props =>{
    return(
        <div className="UserOutput">
            <p>
                Hello {props.userName}
            </p>
            <p>This is userOutput function</p>
        </div>
    )
}

export default userOutput;