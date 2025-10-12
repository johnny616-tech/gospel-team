import { useParams } from "react-router-dom"
import { products } from "../productPage/product"
import "./mainIndex.css"

const AnswerPageFun = () => {
    let {id} = useParams()
    const productIds = products
    const productId = productIds[id - 1]
    console.log(productId)
    return(
        <div className="answer-div">
            <div>
                <img className="answer-img" src={productId.image} alt="Jesus" />
            </div>
            <h4>{productId.answer}</h4>
        </div>
    )
}

export default AnswerPageFun;