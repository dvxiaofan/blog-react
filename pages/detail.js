import React from 'react';
import Head from 'next/head';
import { Row, Col} from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';

const Detail = () => (
	<div className='container'>
		<Head>
			<title>详情</title> <link rel='icon' href='/public/favicon.ico' />
		</Head>{' '}
		<Header />

		<Row className='comm-main' type='flex' justify='center'>
			<Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
				左侧
			</Col>
			<Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
			</Col>
		</Row>
	</div>
);

export default Detail;