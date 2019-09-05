import * as React from 'react';
import RouterView from '../router/RouterView';
import { inject, observer } from 'mobx-react';
import './exammine/index.css';
import Btn from '../components/btn';

interface propsInfo {
    question: any,
   
}


@inject('question')
@observer


export default class Exammine extends React.Component<propsInfo> {
    constructor(props: any) {
        super(props)
        this.getList()
    }
    public state = {
        list: [],
    }
    public componentDidMount() {
        this.getList()
    }
    public getList = async () => {
        const { getQuestion } = this.props.question;
        getQuestion()
        const result = await this.props.question.getQuestion()
        console.log(result)
        this.setState({
            list: result
        })
        console.log(this.state.list)
    }


    public render() {
        let { list } = this.state;
        return (
            <div className="exammine">
                <h3>查看试题</h3>
                <div className="onest">
                    <div className="demoes">
                        <span>课程训练：</span>
                        <span>All</span>
                        <span>javaScript上</span>
                        <span>javaScript下</span>
                        <span>模块开发</span>
                        <span>移动端开发</span>
                        <span>node基础</span>
                        <span>组件化开发</span>
                        <span>渐进式开发</span>
                        <span>项目实战</span>
                        <span>javaScript高级</span>
                        <span>node高级</span>
                    </div>
                    <div className="twilist">
                        <div>
                            考试类型：
                           <input />
                        </div>
                        <div>
                            题目类型：
                           <input />
                        </div>
                        <div>
                            <button>查询</button>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    

                        {
                            list && list.map((item:any, index) => {
                                return (
                                    <div className="con" key={index}>
                                    <dl>
                                        <dt>
                                            <p>{item.title}</p>
                                            <p>
                                                {/* <Btn deo={item.questions_type_text}/> */}
                                                <Btn/>
                                            </p>
                                            <p>{item.user_name}发布</p>
                                        </dt>
                                        <dd>编辑</dd>
                                    </dl>
                                    </div>
                                )
                            })
                        }
                   
                </div>
            </div>
        )
    }
}



