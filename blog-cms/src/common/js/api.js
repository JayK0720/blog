import axios from 'axios';
const instance = axios.create({
	baseURL:'http://localhost:5000',
	withCredentials:true
});

instance.interceptors.response.use((response) => {
	const {data } = response;
	if(data.code === 0) {
		return data;
	}else{
		return Promise.reject(data.message);
	}
});

export default instance;