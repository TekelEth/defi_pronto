import "../../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import PageLaout from "../components/layout";
import AuthProvider from "../../utils/AuthContext";
import WalletProvider from "components/layout/WalletContext";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider >
      <PageLaout>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </PageLaout>
    </WalletProvider>
  );
}

export default MyApp;
