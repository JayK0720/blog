import 'antd/dist/antd.min.css';
import '../styles/pages/common.scss';
import '../styles/pages/home.scss';
import '../styles/pages/detail.scss';
import 'markdown-navbar/dist/navbar.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
