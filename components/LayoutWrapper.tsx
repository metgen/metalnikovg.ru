import { Open_Sans } from '@next/font/google';

import SectionContainer from './SectionContainer';
import Footer from './Footer';
import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const inter = Open_Sans({
  subsets: ['latin'],
});

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} relative flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto mt-20">{children}</main>
        <div className="bg-image-container bg-image-container-one"></div>
        <div className="bg-image-container bg-image-container-two"></div>
        {/* <div className="bg-image-container bg-image-container-three"></div> */}
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
