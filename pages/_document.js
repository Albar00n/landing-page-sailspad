/* eslint-disable @next/next/no-css-tags */
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
					<meta charset="utf-8" />
					<meta data-rh="true" name="robots" content="index, follow" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta content="origin" name="referrer" />
					<meta
						property="description"
						content="Get the most innovative business card using Augmented reality with the power of Sailspad platform. Unlimited copies, unlimited views, works on all types of Smartphones."
					/>
					<meta
						property="og:description"
						content="SailsPad is an AR Platform that allows entrepreneurs to create AR business cards in a short period of time for multiple users, which improves business networking performance and results. Sailspad gives a lasting impression on everyone who uses your printed business card, Sailspad is affordable, reliable, and able to manage a huge number of cards on one Dashboard."
					/>
					{/* /// */}
					<meta
						name="keywords"
						content="design your own business cards,professional business cards,making business cards,modern business card design,professional business card design,creating business cards,creative business card design,business card digital,making business cards online,personal business card design,good quality business cards,best quality business cards"
					/>
					<meta
						name="keywords"
						content="card business , business card design,cheap business cards,name card,business card printing,business cards online,order business cards,best business cards,business card design free,luxury business cards"
					/>
					<meta
						name="keywords"
						content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
					/>
					<meta
						name="keywords"
						content="تصميم تطبيقات أبو ظبي, تطوير تطبيق أبو ظبي, تطوير تطبيق جوال أبو ظبي, شركة تطوير تطبيق أبو ظبي, تطوير تطبيقات الجوال في أبو ظبي, شركة تصميم تطبيقات الامارات, تصميم ابلكيشن في أبو ظبي برنامج صنع تطبيقات الاندرويد, شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، تطوير تطبيقات الهاتف المحمول في أبو ظبي ، شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطورو التطبيقات في أبو ظبي ، شركة تطوير التطبيقات في أبو ظبي ، شركة مطوري تطبيقات الجوال في أبو ظبي ، تطوير تطبيقات الاندرويد أبو ظبي ، تطوير تطبيقات ايفون في أبو ظبي، تطوير تطبيقات الآيفون في أبو ظبي ، شركات تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطور أندرويد أبو ظبي ، خدمات تطوير تطبيقات الهاتف المحمول في أبو ظبي "
					/>
					{/* ///// */}
					<meta name="author" content="Ghassan awad" />
					<meta name="copyright" content="Ghaasan" />
					<meta name="language" content="en" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="og:url"
						content="Https://landing-page-sailspad.vercel.app/"
					/>
					<link
						rel="canonical"
						href="https://landing-page-sailspad.vercel.app/"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Comforter&family=Finlandica:ital,wght@1,400;1,500;1,700&family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@200;400;500;600;700;800;900&family=League+Spartan:wght@300;400;500;600&family=Neonderthaw&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500;1,700&display=swap"
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
