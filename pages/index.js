import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Icon } from 'antd';
import Header from '../components/Header';

const Home = () => (
	<div className='container'>
		<Head>
			<title>首页</title> <link rel='icon' href='/public/favicon.ico' />
		</Head>{' '}
		<Header />
	</div>
);

export default Home;
