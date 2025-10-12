import { useState } from "react"
import "./headerIndex.css"

function HeaderFun(){
    const {list, setList} = useState(false)
    
    const AddPage = () => {
        console.log('hi')
        setList(preSet => !preSet)
        
        
        
    }
    // console.log(list)
    return(
        <div className="headerContainer">
            <div>
                <p onClick={() => AddPage()}>HI</p>
            </div>
            <div className="image-head">
                <img className="gospel-image1"  src="../public/images/gospelTeam1.jpg" alt="Gospel Team Logo" />
                <p className="gospelName">THE GOSPEL TEAM</p>
            </div>
            <div>
                <h3>Hello</h3>
            </div>
        </div>
    )
}

export default HeaderFun;