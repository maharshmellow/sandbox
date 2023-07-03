import { Azeret_Mono } from 'next/font/google';
const azeretMono = Azeret_Mono({ subsets: ['latin'], display: 'swap', preload: true });

export default function AzeretFontContainer(props: { children: React.ReactNode }) {
  return <main className={azeretMono.className}>{props.children}</main>;
}
