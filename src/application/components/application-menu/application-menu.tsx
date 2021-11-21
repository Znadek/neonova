import { Layout, Button } from 'antd';
import { WalletOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { ApplicationLogo } from '../application-logo';

export interface Route {
	url: string;
	icon: React.ReactNode;
}

export const ApplicationMenu = React.memo(function ApplicationMenu() {
	return (
		<>
			<Layout.Sider className={'a-menu'} theme={'light'} collapsed={true}>
				<div className={'a-menu-logo'}>
					<ApplicationLogo />
				</div>

				<div
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						padding: 16,
					}}
				>
					<div>
						<Button
							type={'default'}
							shape={'circle'}
							onClick={() => console.log('clicked')}
							icon={<WalletOutlined />}
							style={{ marginBottom: 24 }}
						/>
					</div>

					<Button
						type={'default'}
						shape={'circle'}
						onClick={() => console.log('clicked')}
						icon={<SettingOutlined />}
						style={{ marginBottom: 24 }}
					/>
				</div>
			</Layout.Sider>

			<style jsx>{`
				:global(.a-menu) {
					min-height: 100vh;
					border-right: 1px solid #eceff1;
				}

				:global(.a-menu .ant-layout-sider-children) {
					display: flex;
					flex-direction: column;
				}

				.a-menu-logo {
					padding: 16px 20px 16px 20px;
				}
			`}</style>
		</>
	);
});
