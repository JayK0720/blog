import axios from 'axios';
const instance = axios.create({
	baseURL:''
});

instance.interceptors.response.use((response) => {
	const {data } = response;
	return data;
});

export default instance;