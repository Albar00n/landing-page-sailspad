import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="description"
						content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
					/>
					<meta
						name="description"
						content="Beyin is a leading mobile app development company in Abu Dhabi. We specialize in cross platform app development, Augmented reality and virtual reality app development."
					/>

					<meta name="keywords" content="" />

					<meta data-rh="true" name="robots" content="index, follow" />
					<meta name="Linkedin:site" content="@beyin-tech" />
					<meta name="instagram:site" content="@beyin.me" />

					<meta name="author" content="" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta data-rh="true" name="google" content="translate" />

					{/* Google Fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>

					<link rel="stylesheet" href="/css/light.css" />
				</Head>

				<body>
					{/* <script
						dangerouslySetInnerHTML={{
							__html: themeInitializerScript,
						}}
					></script> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
