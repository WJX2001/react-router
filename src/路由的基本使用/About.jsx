import {useSearchParams,useParams} from 'react-router-dom'

function About() {
    // const [params] = useSearchParams()
    // params 是一个对象 对象里有一个get的方法 
    // 用来获取对应的参数 把参数的名称作为get方法的实参传过来
    // const id = params.get('id')

    const params = useParams()
    console.log(params)
    return (
        <div>about:得到的参数id值为{params.id} </div>
    )
}

export default About