import { Share1Icon } from '@radix-ui/react-icons';
import DefaultButton from './DeafultButton';

function ShareButton() {
	function onClickShare(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();
	}

	return (
		<DefaultButton
			tooltip="Compartilhar"
			icon={<Share1Icon />}
			onClick={onClickShare}
		/>
	);
}

export default ShareButton;
