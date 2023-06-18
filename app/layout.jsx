import "@styles/globals.css";

export const metadata = {
  title: "Promptomatic",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">{children}</main>
    </body>
  </html>
);
export default RootLayout;
