import instance from './api.js';
import urls from './request.js';

export function _login(data) {
	return instance({
		method:"post",
		url:urls.login,
		data,
	});
}

export function _logout() {
	return instance({
		method:'post',
		url:urls.logout
	})
}
