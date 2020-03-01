import React from 'react';
import Head from 'next/head';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';
import Advert from '../components/Advert';
import '../static/style/pages/detail.css';

const Detail = () => {
	return (
		<div className='container'>
			<Head>
				<title>详情</title>{' '}
				<link rel='icon' href='/public/favicon.ico' />
			</Head>{' '}
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
					<div className='bread-div'>
						<Breadcrumb>
							<Breadcrumb.Item>
								<a href='/'>首页</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>博文列表</Breadcrumb.Item>
							<Breadcrumb.Item>XXX</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<div>
						<div className='detail-title'>
							JS 基础知识点及常考面试题(一)
						</div>
                        <div className='list-icon center'>
                            <span><Icon type='calendar' /> 2020-03-01</span>
                            <span><Icon type='folder' /> JavaScript</span>
                            <span><Icon type='fire' /> 5565</span>
                        </div>
                        <div className='detail-content'>
                            Markdown 内容解析
                        </div>
					</div>
				</Col>
				<Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default Detail;
