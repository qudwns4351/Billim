import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import LoginPage from "@pages/LoginPage";
import HomePage from "@pages/HomePage";
import ProductDetailPage from "@pages/ProductDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <LoginPage /> */}
      <HomePage />
      {/* <ProductDetailPage /> */}
    </ThemeProvider>
  );
}

export default App;
