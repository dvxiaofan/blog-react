import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
// import Advert from '../components/Advert';
import Footer from '../components/Footer';

const BlogList = () => {
	const [MyList, setMyList] = useState([
		{
			title: 'JS 基础知识点及常考面试题(一',
			context:
				'JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，'
		},
		{
			title: 'JS 基础知识点及常考面试题(二',
			context:
				'JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，'
		},
		{
			title: 'JS 基础知识点及常考面试题(三',
			context:
				'JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，'
		},
		{
			title: 'JS 基础知识点及常考面试题(四',
			context:
				'JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，'
		},
		{
			title: 'JS 基础知识点及常考面试题(五',
			context:
				'JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点原始（Primitive）类型涉及面试题：原始类型有哪几种？null 是对象嘛？在 JS 中，存在着 6 种原始值，分别是：首先原始类型存储的都是值，是没有函数可以调用的，比如 undefined.toString()此时你肯定会有疑问，这不对呀，'
		}
	]);

	return (
		<div className='container'>
			<Head>
				<title>博文列表</title>
				<link rel='icon' href='/public/favicon.ico' />
			</Head>
			<Header />
			<Row className='comm-main' type='flex' justify='center'>
				<Col
					className='comm-left'
					xs={24}
					sm={24}
					md={16}
					lg={18}
					xl={14}
				>
                    {/* // 面包屑导航 */}
					<div className='bread-div'>
						<Breadcrumb>
							<Breadcrumb.Item>
								<a href='/'>首页</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>博文列表</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<List
						header={<div>最新博文</div>}
						itemLayout='vertical'
						dataSource={MyList}
						renderItem={item => (
							<List.Item>
								<div className='list-title'>{item.title}</div>
								<div className='list-icon'>
									<span>
										<Icon type='calendar' /> 2020-03-01
									</span>
									<span>
										<Icon type='folder' /> JavaScript
									</span>
									<span>
										<Icon type='fire' /> 7676
									</span>
								</div>
								<div className='list-context'>
									{item.context}
								</div>
							</List.Item>
						)}
					/>
				</Col>
				<Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					{/* <Advert /> */}
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default BlogList;
