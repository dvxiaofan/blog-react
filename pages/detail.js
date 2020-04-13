import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'
// import Advert from '../components/Advert';
import '../static/style/pages/detail.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'

const Detail = (props) => {
    const renderer = new marked.Renderer()
    const tocify = new Tocify()

    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    }

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false, // 容错
        sanitize: false, // 是否忽略html
        tables: true, // 表格	-- gfm 为 true 才有效
        breaks: false, // 换行符 -- gfm 为 true 才有效
        smartLists: true, // 自动渲染列表
        highlight: function (code) {
            // 根据传入代码检测显示方法
            return hljs.highlightAuto(code).value
        },
    })

    let html = marked(props.articleContent)

    return (
        <div className="container">
            <Head>
                <title> 详情 </title>
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
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/"> 首页 </a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item> 博文列表 </Breadcrumb.Item>
                            <Breadcrumb.Item> XXX </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className="detail-title"> {props.title} </div>
                        <div className="list-icon center">
                            <span>
                                <Icon type="calendar" /> {props.addTime}
                            </span>
                            <span>
                                <Icon type="folder" /> {props.typeName}
                            </span>
                            <span>
                                <Icon type="fire" /> {props.viewCount}
                            </span>
                        </div>
                        <div
                            className="detail-content"
                            dangerouslySetInnerHTML={{
                                __html: html,
                            }}
                        ></div>
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    {/* <Advert /> */}
                    <Affix offsetTop={5}>
                        <div className="detail-nav comm-box">
                            <div className="nav-title"> 文章目录 </div>
                            {tocify && tocify.render()}
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

Detail.getInitialProps = async (context) => {
    let id = context.query.id

    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleById + id).then((res) => {
            // console.log('res: ', res.data);
            resolve(res.data.data[0])
        })
    })

    return await promise
}

export default Detail
