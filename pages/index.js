import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
// import Advert from '../components/Advert';
import Footer from '../components/Footer'
import servicePath from '../config/apiUrl'
import '../static/style/pages/index.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const Home = (list) => {
    const [MyList, setMyList] = useState(list.data)

    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false, // 容错
        sanitize: false, // 是否忽略html
        tables: true, // 表格-- gfm 为 true 才有效
        breaks: false, // 换行符-- gfm 为 true 才有效
        smartLists: true, // 自动渲染列表
        highlight: function (code) {
            // 根据传入代码检测显示方法
            return hljs.highlightAuto(code).value
        },
    })

    return (
        <div className="container">
            <Head>
                <title>首页</title>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col
                    className="comm-left"
                    xs={24}
                    sm={24}
                    md={16}
                    lg={18}
                    xl={14}
                >
                    <List
                        header={<div>最新博文</div>}
                        itemLayout="vertical"
                        dataSource={MyList}
                        renderItem={(item) => (
                            <List.Item>
                                <div className="list-title">
                                    <Link
                                        href={{
                                            pathname: '/detail',
                                            query: { id: item.id },
                                        }}
                                    >
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className="list-icon">
                                    <span>
                                        <Icon type="calendar" /> {item.addTime}
                                    </span>
                                    <span>
                                        <Icon type="folder" /> {item.typeName}
                                    </span>
                                    <span>
                                        <Icon type="fire" /> {item.viewCount}
                                    </span>
                                </div>
                                <div
                                    className="list-context"
                                    dangerouslySetInnerHTML={{
                                        __html: marked(item.introduce),
                                    }}
                                ></div>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    {/* <Advert /> */}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleList).then((res) => {
            // console.log('res: ', res.data);
            resolve(res.data)
        })
    })

    return await promise
}

export default Home
