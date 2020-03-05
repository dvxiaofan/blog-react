import React, { useState, useEffect } from 'react';
import '../static/style/components/Header.css';
import { Row, Col, Menu, Icon } from 'antd';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const Header = () => {
	const [navArray, setNavArray] = useState([]);

	useEffect(() => {
		// 获取文章类型
		const fetchData = async () => {
			const result = await axios(servicePath.getTypeInfo).then(res => {
				return res.data.data;
			});
			setNavArray(result);
		};

		fetchData();
	}, []);

	// 右上导航的点击事件
	const handleClick = e => {
		if (e.key == 0) {
			Router.push('/index');
		} else {
			Router.push('/list?id=' + e.key);
		}
	};

	return (
		<div className='header'>
			<Row type='flex' justify='center'>
				<Col xs={24} sm={24} md={10} lg={15} xl={12}>
					<span className='header-logo'> DevZhang </span>
					<span className='header-txt'>
						永远相信美好的事情即将发生
					</span>
				</Col>
				<Col xs={0} sm={0} md={14} lg={8} xl={6}>
					<Menu mode='horizontal' onClick={handleClick}>
						<Menu.Item key='0'>
							<Icon type='home' />
							首页
						</Menu.Item>
						{navArray.map(item => {
							return (
								<Menu.Item key={item.id}>
									<Icon type={item.icon} />
									{item.typeName}
								</Menu.Item>
							);
						})}
					</Menu>
				</Col>
			</Row>
		</div>
	);
};

export default Header;
