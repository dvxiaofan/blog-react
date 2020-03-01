import React from 'react';
import '../static/style/components/Header.css';
import { Row, Col, Menu, Icon } from 'antd';

const Header = () => (
	<div className='header'>
		<Row type='flex' justify='center'>
			<Col xs={24} sm={24} md={10} lg={15} xl={12}>
				<span className='header-logo'> DevZhang </span>
				<span className='header-txt'> 永远相信美好的事情即将发生 </span>
			</Col>
			<Col xs={0} sm={0} md={14} lg={8} xl={6}>
				<Menu mode='horizontal'>
					<Menu.Item key='home'>
						<Icon type='home'/>
						首页
					</Menu.Item>
					<Menu.Item key='video'>
						<Icon type='rocket' />
						博文
					</Menu.Item>
					<Menu.Item key='life'>
						<Icon type='smile' />
						生活
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	</div>
);

export default Header;
