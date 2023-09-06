import { Cross2Icon } from '@radix-ui/react-icons';
import DefaultButton from './DeafultButton';
import useSelected from '@/hooks/useSelected';

function CloseButton() {
	const select = useSelected();

	function onClickClose() {
		select.set(null);
	}

	return (
		<DefaultButton
			tooltip="Desfazer Seleção"
			icon={<Cross2Icon />}
			onClick={onClickClose}
		/>
	);
}

export default CloseButton;
