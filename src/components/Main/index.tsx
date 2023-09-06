import { Card, Flex, Separator } from '@radix-ui/themes';

import Read from './Read';
import Head from './Head';

function Main() {
	return (
		<Card
			style={{
				minWidth: '100%',
				minHeight: '80%',
			}}
		>
			<Flex direction="column">
				<Head />
				<Separator my="3" size="4" />
				<Read />
			</Flex>
		</Card>
	);
}

export default Main;
