import { writable } from 'svelte/store';
import type { EditorConfig } from '../domain/EditorConfig';

export default writable<EditorConfig>({
	properties: [{ key: 'root', value: true }],
	sections: [
		{
			name: '*',
			properties: [
				{ key: 'charset', value: 'utf-8' },
				{ key: 'end_of_line', value: 'lf' },
				{ key: 'indent_style', value: 'tab' },
				{ key: 'insert_final_newline', value: true },
				{ key: 'tab_width', value: 2 },
				{ key: 'trim_trailing_whitespace', value: true },
			],
		},
		{
			name: 'package.json',
			properties: [
				{ key: 'indent_size', value: 2 },
				{ key: 'indent_style', value: 'space' },
			],
		},
	],
});
