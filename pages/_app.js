import "../styles/globals.css";
import { Suspense } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={() => <div>Root Suspense fallback</div>}>
      <Component {...pageProps} />
    </Suspense>
  );
}

export default MyApp;
