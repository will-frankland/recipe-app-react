import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Search />
      <Category />
      <Pages />
    </div>
    </BrowserRouter>  );
}
