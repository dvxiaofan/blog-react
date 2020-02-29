import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';

const Home = () => (
	<div className='container'>
		<Head>
			<title> Home </title> <link rel='icon' href='/favicon.ico' />
		</Head>{' '}
		<div>
			<Button>button</Button>
		</div>
	</div>
);

export default Home;
