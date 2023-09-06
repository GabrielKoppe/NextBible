import { Em as EmRadix, Text as TextRadix } from '@radix-ui/themes';
import styled from 'styled-components';

interface TextProps {
	$selected: boolean;
	$font: FontType;
}

export const Text = styled(TextRadix)<TextProps>`
	width: fit-content;
	background-color: ${(props) => (props.$selected ? 'var(--accent-5)' : null)};
	font-family: var(${(props) => props.$font});
	&:hover {
		background-color: var(--accent-7);
		cursor: pointer;
	}
`;

export const Em = styled(EmRadix)`
	font-size: var(--font-size-1);
`;
