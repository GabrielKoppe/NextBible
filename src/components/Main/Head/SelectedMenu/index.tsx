'use client';

import useSelected from '@/hooks/useSelected';
import CloseButton from './Button/CloseButton';
import { Flex } from '@radix-ui/themes';
import CopyButton from './Button/CopyButton';

function SelectedMenu() {
	const select = useSelected();

	if (!select.has) {
		return <></>;
	}

	return (
		<Flex direction="row" gap="4" px="4">
			{/* <ShareButton /> */}
			<CopyButton />
			<CloseButton />
		</Flex>
	);
}

export default SelectedMenu;
