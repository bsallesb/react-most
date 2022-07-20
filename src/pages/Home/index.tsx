import { memo } from 'react';

import Contact from 'components/content/Contact';
import OurClients from 'components/content/OurClients';
import Prices from 'components/content/Prices';
import Product from 'components/content/Product';
import Solutions from 'components/content/Solutions';
import Testimonials from 'components/content/Testimonials';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { Main } from './styled';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Product />
        <Solutions />
        <OurClients />
        <Testimonials />
        <Prices />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default memo(Home);
