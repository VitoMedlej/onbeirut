import '@/styles/styles.css'
import type { AppProps } from 'next/app';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
import Script from 'next/script';

gsap.registerPlugin(ScrollTrigger);
export default function App({ Component, pageProps }: AppProps) {
  
  return <>
    {/* <!-- Google tag (gtag.js) --> */}
<Script strategy="lazyOnload"  async src="https://www.googletagmanager.com/gtag/js?id=G-6FMZ4XFZ6X"></Script>
<Script strategy="lazyOnload">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6FMZ4XFZ6X');
  `}
</Script>
  <Component {...pageProps} />
  </>
}
