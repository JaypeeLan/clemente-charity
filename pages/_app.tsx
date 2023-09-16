import { AppProps } from "next/app";
import "../styles/main.scss";
import Head from "next/head";
import { Raleway } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
const raleway = Raleway({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>Clemente Foundation</title>
        <meta
          name="Charity foundation"
          content="Donate to our NGO charity organization in Lagos, Nigeria and help make a difference."
        />
      </Head>
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
