// _app.tsx
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import "../styles/main.scss";
const raleway = Raleway({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <DefaultSeo
        title="Clemente Foundation"
        description="Clemente Charity Foundation is a beacon of hope in a world filled with challenges and inequalities. We are dedicated to empowering and inspiring hope in underserved communities in Nigeria through comprehensive support, education, and community engagement. Join us in uplifting the lives of the less privileged and be part of the transformation."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.clementecharityfoundation.com.ng/",
          site_name: "Clemente Foundation",
        }}
      />
      {/* <Head>
        <title>Clemente Foundation</title>
        <meta
          name="Charity foundation"
          content="Donate to our NGO charity organization in Lagos, Nigeria and help make a difference."
        />
      </Head> */}
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
