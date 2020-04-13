import { Avatar, Divider } from 'antd'
import '../static/style/components/Author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar
                    size={100}
                    src="http://img.devzhangjs.com/img/2020-03-01-151248.png"
                />
            </div>
            <div className="author-des">
                一个行走在前端路上的信徒
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />
            </div>
        </div>
    )
}

export default Author
