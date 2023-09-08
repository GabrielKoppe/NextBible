'use client';

import { DropdownMenu, Flex, Text } from '@radix-ui/themes';
import Default from '.';
import { useConfig } from '@/context/ConfigContext';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const InterComponent = styled(Text)`
	font-family: var(--font-inter);
`;

const RobotoComponent = styled(Text)`
	font-family: var(--font-roboto-mono);
`;

const PlayfairComponent = styled(Text)`
	font-family: var(--font-playfair_display);
`;

export default function TextButton() {
	const [config, dispatch] = useConfig();

	function onClickAdd(event: React.MouseEvent<HTMLElement, MouseEvent>) {
		event.preventDefault();
		dispatch({ type: 'ADD_TEXT_SIZE' });
	}

	function onClickSub(event: React.MouseEvent<HTMLElement, MouseEvent>) {
		event.preventDefault();
		dispatch({ type: 'SUB_TEXT_SIZE' });
	}

	function onClickInter(event: React.MouseEvent<HTMLElement, MouseEvent>) {
		event.preventDefault();
		dispatch({ type: 'CHANGE_FONT_INTER' });
	}

	function onClickRoboto(event: React.MouseEvent<HTMLElement, MouseEvent>) {
		event.preventDefault();
		dispatch({ type: 'CHANGE_FONT_ROBOTO' });
	}

	function onClickPlayfair(event: React.MouseEvent<HTMLElement, MouseEvent>) {
		event.preventDefault();
		dispatch({ type: 'CHANGE_FONT_PLAYFAIR' });
	}

	return (
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger>Texto</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				<DropdownMenu.Label>Tamanho da Fonte</DropdownMenu.Label>
				<Flex direction="row" align="center" gap="4" pl="1">
					<Default icon={<PlusIcon />} text={''} onDefaultClick={onClickAdd} />
					<Text size="1">{config.textConfig.textSize}</Text>
					<Default icon={<MinusIcon />} text={''} onDefaultClick={onClickSub} />
				</Flex>

				<DropdownMenu.Label>Tipos de Fonte</DropdownMenu.Label>
				<Flex direction="column" gap="1" align="baseline" pl="1">
					<Default
						icon={
							<InterComponent weight="medium" size="2">
								Inter
							</InterComponent>
						}
						text={''}
						onDefaultClick={onClickInter}
					/>
					<Default
						icon={
							<RobotoComponent weight="medium" size="2">
								Roboto
							</RobotoComponent>
						}
						text={''}
						onDefaultClick={onClickRoboto}
					/>
					<Default
						icon={
							<PlayfairComponent weight="medium" size="2">
								Playfair
							</PlayfairComponent>
						}
						text={''}
						onDefaultClick={onClickPlayfair}
					/>
				</Flex>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	);
}
