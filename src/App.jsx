import { createContext, Fragment } from "react"
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import HeaderFun from "./header/headerIndex";
import MainFun from "./mianPage/mainIndex";
import { products } from "./productPage/product";
import AnswerPageFun from "./mianPage/answerPage";


export const mainPage = createContext(null);
const RouterElement = () => {
  const elements = useRoutes(
    [{ path: "*", element: <HeaderFun /> },
      { path: "/", element: <MainFun /> },
      { path: "/answer/:id", element: <AnswerPageFun /> },
    ]
  )
  return elements;
}



function App(){
  

  return(
    <Fragment>
      <mainPage.Provider value={{}}>
        {/* <HeaderFun /> */}
        <RouterElement />
        
      </mainPage.Provider>
    </Fragment>
  )
}

export default App