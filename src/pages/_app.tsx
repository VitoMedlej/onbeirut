import '@/styles/styles.css'
import type { AppProps } from 'next/app';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);
export default function App({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}
