import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="font-noto antialiased bg-cover bg-center h-screen bg-gray-100 dark:bg-gray-800">
        {/* <div className="font-noto antialiased bg-cover bg-center h-screen bg-gray-900	" style={{backgroundImage: "url(background.jpg)"}}> */}
        <div className="flex flex-col h-full overflow-scroll overflow-x-hidden">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
