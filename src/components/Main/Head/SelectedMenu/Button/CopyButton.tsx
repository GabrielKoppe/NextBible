import { CopyIcon } from '@radix-ui/react-icons';
import DefaultButton from './DeafultButton';
import useSelected from '@/hooks/useSelected';

function CopyButton() {
	const select = useSelected();

	function onClickCopy(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();

		navigator.clipboard.writeText(select.toString());
	}

	return (
		<DefaultButton tooltip="Copiar" icon={<CopyIcon />} onClick={onClickCopy} />
	);
}

export default CopyButton;
