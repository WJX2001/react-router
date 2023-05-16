
// 引入两个组件
import Home from "./路由的基本使用/Home"
import About from "./路由的基本使用/About"
import Login from "./路由的基本使用/Login"

// 进行路由配置
import {HashRouter,BrowserRouter,Link,Routes,Route} from 'react-router-dom'

function App() {
  return (
    // 声明当前要用一个非hash模式的路由
    <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>

      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系 path代表路径 element代表组件 成对出现 path -> element */}
        <Route path="/" element = {<Home />}></Route>
        <Route path="/about/:id" element = {<About />}></Route>
        <Route path="/login" element = {<Login />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App