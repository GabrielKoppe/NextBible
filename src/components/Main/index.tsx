'use client';

import { Card, Flex, Separator } from '@radix-ui/themes';

import Read from './Read';
import Head from './Head';
import PassButton from './Button/AfterButton';
import BeforeButton from './Button/BeforeButton';
import AfterButton from './Button/AfterButton';

function Main() {
	return (
		<Flex direction="row" align="center" justify="center" gap="4">
			<BeforeButton />
			<Card
				style={{
					width: '50vw',
					height: '80vh',
				}}
			>
				<Flex direction="column">
					<Head />
					<Separator my="3" size="4" />
					<Read />
				</Flex>
			</Card>
			<AfterButton />
		</Flex>
	);
}

export default Main;
