import Layout from "./嵌套路由的实现/Layout"
import Login from "./嵌套路由的实现/Login"

import Board from "./嵌套路由的实现/Board"
import Article from "./嵌套路由的实现/Article"
import NotFound from "./NotFound"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 定义二级路由嵌套 */}
          {/* 默认二级 添加index属性 把他自己的path干掉 */}
          <Route index element={<Board />} ></Route>
          <Route path="article" element={<Article />} ></Route>
        </Route>
        
        <Route path="/login" element={<Login />}></Route>
        {/* 当所有的路径都没有匹配时 做兜底匹配显示 未找到 */}
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App