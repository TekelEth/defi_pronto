import '../../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import PageLaout from '../components/layout'

function MyApp({ Component, pageProps }) {
	return (
		<PageLaout>
			<Component {...pageProps} />
		</PageLaout>
	);
}

export default MyApp;
