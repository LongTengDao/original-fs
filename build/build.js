'use strict';

require('@ltd/j-dev')(__dirname+'/..')(async ({ build, 龙腾道, get, put, del, map }) => {
	
	await build({
		name: 'original-fs',
		Desc: 'Ensure that the correct module is loaded in a non-Electron environment.／在非 Electron 环境中确保加载正确的模块。',
		user: 'LongTengDao',
		Auth: 龙腾道,
		semver: await get('src/version'),
		Copy: 'LGPL-3.0',
		ES: 3,
		NPM: true,
		LICENSE_: true,
	});
	
	await map('dist/NPM/index.js', removeSourceMappingURL, 'dist/NPM/index.js')
	await del('dist/NPM/index.js.map');
	
	await map('docs/README.md', 'dist/NPM/README.md');
	
});

function removeSourceMappingURL (code) {
	return code.replace(/(?:\r?\n|\u2028|\u2029)\/\/# sourceMappingURL=.*$/, '');
}
