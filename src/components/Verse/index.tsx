import { useConfig } from '@/context/ConfigContext';
import useSelected from '@/hooks/useSelected';
import { VerseType } from '@/types/bible';
import { Text, Em } from './style';

function Verse(props: VerseType) {
	const [{ textConfig }] = useConfig();
	const select = useSelected();

	return (
		<Text
			className="text"
			size={String(textConfig.textSize) as SizeType}
			onClick={() => select.set(props)}
			$selected={select.is(props.verse)}
			$font={textConfig.font}
		>
			<Em>{props.verse} </Em>
			{props.text}{' '}
		</Text>
	);
}

export default Verse;
