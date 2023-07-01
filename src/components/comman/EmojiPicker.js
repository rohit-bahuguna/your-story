import React from 'react';

const EmojiPicker = ({ onEmojiClick, toggle = false }) => {
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

	if (!toggle) {
		return;
	}

	return (
		<div className="grid  grid-cols-12 border border-black shadow-xl p-2 rounded-lg">
			{array.map((emoji, index) =>
				<span key={index} onClick={onEmojiClick} className="text-lg">
					{emoji}
				</span>
			)}
		</div>
	);
};

export default EmojiPicker;
