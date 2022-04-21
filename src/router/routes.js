//路由配置
import Home from "../Views/Home"
import About from "../Views/About"
import Blog from "../Views/Blog"
import Message from "../Views/Message"
import Project from "../Views/Project"

export default [
    {
        path:"/",component:Home
      },
      {
        path:"/about",component:About
      },
      {
        path:"/message",component:Message
      },
      {
        path:"/blog",component:Blog
      },
      {
        path:"/project",component:Project
      },
]