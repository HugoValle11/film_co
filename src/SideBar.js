import Option from "./button_components/Option"
import Logo from "./logo.png"

function SideBar(){

    return (
            <div className="col-md-3 sidebar--box">
                
                    <img className="sidebar--png sidebar--logo img-fluid" src={Logo} height="300px"/>
                

                    {false && <div className="sidebar--options">
                        <Option
                        texto ="This is movie #1"
                        />
                        <Option 
                        texto ="This is movie #2"
                        />
                        <Option 
                        texto ="This is movie #3"
                        />
                    </div>
                    }

                    {false && <button className="sidebar--button">Generate</button>}
                </div>

    )
}



export default SideBar