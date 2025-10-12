import { useContext } from "react"
import { mainPage } from "../App"
import { useNavigate, useParams } from "react-router-dom"
import { products } from "../productPage/product"



function MainProductFun({eachQuestion,}){
    // const { theAnswer } = useContext(mainPage)
    
    const navigate = useNavigate()
    const theAnswer = (productId) => {
    
    navigate(`answer/${productId}`)
    console.log(productId)
    }

    return(
        <div>
            <div key={eachQuestion.id}  className="main-div" onClick={() => theAnswer(eachQuestion.id)}>
                    <div style={{width: '150px', height: '100px'}}>
                        <img className="main-image" style={{width: '150px', height: '100px'}} src={eachQuestion.image} alt="" />
                    </div>
                    <h4 className="questions">{eachQuestion.question}</h4>
                </div>
        </div>
    )
}

export default MainProductFun