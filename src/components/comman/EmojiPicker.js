import React, { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const EmojiPicker = ({ onEmojiClick, toggle = false, setToggleEmoji }) => {
	const array = [
		'😀',
		'😃',
		'😄',
		'😁',
		'😆',
		'😅',
		'😂',
		'🤣',
		'🥲',
		'🥹',
		'😊',
		'😇',
		'🙂',
		'🙃',
		'😉',
		'😌',
		'😍',
		'🥰',
		'😘',
		'😗',
		'😙',
		'😚',
		'😋',
		'😛',
		'😜',
		'🤪',
		'🤨',
		'😔',
		'🤓',
		'😎',
		'🥸',
		'🤩',
		'🥳',
		'😏',
		'😒',
		'😞',
		'🧐',
		'😟',
		'😕',
		'🙁',
		'😣',
		'😖',
		'😫',
		'😩',
		'🥺',
		'😢',
		'😭',
		'😮‍💨',
		'😤',
		'😠',
		'😡',
		'🤬',
		'🤯',
		'😳',
		'🥵',
		'🥶',
		'😱',
		'😰',
		'😥',
		'😓',
		'🫣',
		'🤗',
		'🫡',
		'🤔',
		'🫢',
		'🤭',
		'🤫',
		'🤥',
		'😐',
		'😑',
		'😬',
		'🫨',
		'🫠',
		'🙄',
		'😯',
		'😦',
		'😧',
		'😮',
		'😲',
		'🥱',
		'😴',
		'🤤',
		'😪',
		'😵'
	];

	const ref = useRef()
	useOutsideClick(ref, () => setToggleEmoji(false))

	if (!toggle) {
		return;
	}



	return (
		<div className="grid  grid-cols-12 border border-black shadow-xl p-2 rounded-lg" ref={ref}>
			{array.map((emoji, index) =>
				<span key={index} onClick={onEmojiClick} className="text-lg">
					{emoji}
				</span>
			)}
		</div>
	);
};

export default EmojiPicker;
