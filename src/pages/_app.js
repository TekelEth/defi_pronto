import '../../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import PageLaout from '../components/layout';
import AuthProvider from '../../utils/AuthContext';

function MyApp({ Component, pageProps }) {
	return (
		<PageLaout>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</PageLaout>
	);
}

export default MyApp;
