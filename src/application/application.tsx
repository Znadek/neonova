import React from 'react';
import { ApplicationBody } from './components/application-body';
import { ApplicationLayout } from './components/application-layout';
import { ApplicationMenu } from './components/application-menu';

export const Application = React.memo(function Application({ children }: { children: React.ReactNode }) {
	return (
		<ApplicationLayout>
			<ApplicationMenu />
			<ApplicationBody>{children}</ApplicationBody>

			<style jsx>{``}</style>
		</ApplicationLayout>
	);
});
