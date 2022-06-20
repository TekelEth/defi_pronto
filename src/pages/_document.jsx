import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class CustomDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
					<meta name='apple-mobile-web-app-title' content='Defipronto' />
					<meta name='application-name' content='Defipronto' />
					<meta name='description' content='DefiPronto - Decentralized Tokens Built On Cardano' />
					<meta name='twitter:title' content='Defipronto' />
					<meta property='og:description' content='DefiPronto - Decentralized Tokens Built On Cardano' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
