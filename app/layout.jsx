import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptomatic',
  description: 'Discover and Share AI Prompts',
};

const RootLayout = ({ children }) => (
  <html lang='en' className='dark'>
    <body>
      <div className='bg-white dark:bg-black'>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </div>
    </body>
  </html>
);
export default RootLayout;
