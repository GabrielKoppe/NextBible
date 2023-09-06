import { IconButton, Tooltip } from '@radix-ui/themes';

interface DefaultButtonProps {
	tooltip: string;
	icon: React.ReactElement;
	onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function DefaultButton({ tooltip, icon, onClick }: DefaultButtonProps) {
	return (
		<Tooltip content={tooltip}>
			<IconButton radius="full" variant="ghost" onClick={onClick} size="3">
				{icon}
			</IconButton>
		</Tooltip>
	);
}

export default DefaultButton;
