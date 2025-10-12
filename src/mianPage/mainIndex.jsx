import { products } from "../productPage/product";
import "./mainIndex.css"
import MainProductFun from "./mainProduct";
const questions = products;

function MainFun() {

    

    return(
        <div className="mainDiv">
            {
               questions.length > 0 ? questions.map((eachQuestion) => 
                <MainProductFun  eachQuestion = {eachQuestion}/>
            ) : <h1>No question is added</h1>
            }
        </div>
    )
}


export default MainFun;