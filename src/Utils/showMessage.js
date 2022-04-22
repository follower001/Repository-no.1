//弹出消息
// content  消息内容 string
// type 消息类型（danger、error、info、success、warn） string
//duration Number 弹出的消息框多久消失
//container DOM 消息内容会显示到该容器的正中（默认页面正中）
import Icon from "../components/Icon"
import getComponentRootDom from "./getComponentRootDom";
import styles from "./showMessage.module.less"
export default function(content,type="icon-info",duration = 2000,container){
        //创建消息元素
        const div = document.createElement("div");
        //获取Icon组件渲染的DOM元素
        const iconDOM = getComponentRootDom(Icon,{
            type,
        })
        //设置内容（图标加内容）
        div.innerHTML = `<span class="${styles.icon}">${iconDOM.outerHTML}</span><div>${content}</div>`
        //设置样式
        div.className = styles.message;//这是一个css模板样式
        //将消息元素放入容器中
        if(!container){
            container = document.body;
        }
        else{
            //判断容器的position是否为静态、父容器的定位不可以为静态
            if(getComputedStyle(container).position === "static"){
                container.style.position = "relative";
            }
        }
        container.appendChild(div);
}