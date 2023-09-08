'use client';

import { Box, DropdownMenu, IconButton } from '@radix-ui/themes';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import ThemeButton from './Button/ThemeButton';
import TextButton from './Button/TextButton';
import ColorButton from './Button/ColorButton';

function Settings() {
	return (
		<Box p="6">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<IconButton size="4" radius="full" variant="soft">
						<DotsVerticalIcon />
					</IconButton>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content variant="soft">
					<TextButton />
					<ColorButton />
					<DropdownMenu.Separator />
					<ThemeButton />
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Box>
	);
}

export default Settings;
