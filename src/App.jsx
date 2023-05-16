import Layout from "./嵌套路由的实现/Layout"
import Login from "./嵌套路由的实现/Login"

import Board from "./嵌套路由的实现/Board"
import Article from "./嵌套路由的实现/Article"

import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 定义二级路由嵌套 */}
          <Route path="board" element={<Board />} ></Route>
          <Route path="article" element={<Article />} ></Route>
        </Route>
        
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App