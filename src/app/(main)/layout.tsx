import Header from '@/components/Header';
import Mensager from '@/components/Mensager';
import Settings from '@/components/Settings';
import { Em, Flex, Grid, Text } from '@radix-ui/themes';

function BibleLayout({ children }: { children: React.ReactNode }) {
	return (
		<Grid
			columns="5"
			gap="2"
			style={{ minHeight: '100vh', gridTemplateColumns: '1fr 3fr 1fr' }}
			display="grid"
		>
			<Flex direction="column" gap="2" align="start" justify="between">
				<Mensager />
				<Settings />
			</Flex>
			<Flex direction="column" gap="2" align="center" justify="between">
				<Header />
				{children}
				<Text size="2">
					<Em>Biblia</Em>
				</Text>
			</Flex>
			<Flex direction="column" gap="2" align="center" justify="center"></Flex>
		</Grid>
	);
}

export default BibleLayout;
