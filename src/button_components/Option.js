
function Option(props){

    // const displayOption = () =>{
    //     const opti = props.text.map(op => <h6>{op}</h6>)
    // }

    return(
        <div className="sidebar--option">
            <h6 className="sidebar--text">{props.texto}</h6>
        </div>
    )
}


export default Option