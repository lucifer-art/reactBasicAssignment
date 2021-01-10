const userInput = props =>{
    const inputStyle = {
        border: '2px solid green',
        width:'200px',
        height:'40px',
        borderRadius:'4px'
    }
    return(
        <div>
            <fieldset>
                <legend>
                    Enter Input value:
                </legend>
                <input type="text" style={inputStyle} placeholder="Enter Value" value={props.username} onChange={props.changed} />
            </fieldset>
        </div>
    )
}

export default userInput;