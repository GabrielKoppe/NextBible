'use client';

import { DropdownMenu, Grid, Text, Tooltip } from '@radix-ui/themes';
import Default from '.';
import { useConfig } from '@/context/ConfigContext';
import styled from 'styled-components';
import { color } from '@/constant/color';

interface ColorTextProps {
	$colorVar: string;
}

const ColorText = styled(Text)<ColorTextProps>`
	color: var(${(props) => props.$colorVar});
`;

export default function ColorButton() {
	const [, dispatch] = useConfig();

	return (
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger>Cores</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				<Grid columns="5" gap="1" width="auto">
					{Object.entries(color).map(([colorName, colorVar]) => {
						return (
							<Tooltip key={`tooltip-${colorName}`} content={colorName}>
								<Default
									key={`button-${colorName}`}
									icon={
										<ColorText $colorVar={colorVar} size="6">
											■
										</ColorText>
									}
									text={''}
									onDefaultClick={() => {
										dispatch({
											type: 'CHANGE_SYSTEM_COLOR',
											payload: colorName as ColorType,
										});
									}}
								/>
							</Tooltip>
						);
					})}
				</Grid>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	);
}
