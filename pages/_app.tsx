// _app.tsx
import Layout from "@/components/layout/Layout";
import { seoData } from "@/seoData";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import "../styles/main.scss";
const raleway = Raleway({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps, router }: AppProps) {
  // const router = useRouter()

  const path = router.asPath.split("/")[1];
  console.log("path", path);

  const { keywords, content: description } =
    seoData[path as keyof typeof seoData] || {};
  return (
    <div>
      <head>
        <title>{`Clemente | ${path}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph data for Instagram (and Facebook) */}
        {/* <meta property="og:title" content={`Clemente | ${path}`} /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.clementecharityfoundation.com.ng/"
        />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="clemente_charity_foundation" />
        <link href="/imgs/logo.svg" rel="icon" type="image/svg" />
      </head>
      <main className={raleway.className}>
        <Layout>
          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </main>
    </div>
  );
}
