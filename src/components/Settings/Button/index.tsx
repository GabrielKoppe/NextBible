import { DropdownMenu, Flex } from '@radix-ui/themes';

interface DefaultProps {
	text: string;
	icon: React.ReactNode;
	onDefaultClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function Default({ text, icon, onDefaultClick }: DefaultProps) {
	return (
		<DropdownMenu.Item onClick={onDefaultClick}>
			<Flex display="flex" gap="4" align="center">
				{icon} {text}
			</Flex>
		</DropdownMenu.Item>
	);
}

export default Default;
