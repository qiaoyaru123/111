// 一级路由
import Login from '../views/login';
import Main from '../views/main';
import Exammine from '../components/exammine';
import Addexam from '../components/addexam/addexam';
import Examsort from '../components/examsort/examsort';

// 二级路由
// import Content from '../components/Content';

export default {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/shou',
            component: Addexam
        },{
            path: '/main/list',
            component: Exammine
        },{
            path: '/main/sort',
            component: Examsort
        },{
            redirect:'/main/shou'
        }]
    },{
        path: '/login',
        component: Login
    }]
}