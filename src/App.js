import MenuMobile from "./components/mobile-navigation";
import Home from "./pages/Home";
import { NavBar } from "./sections/navbar";
import { Suspense } from "react";

function App() {
    return (
        <div className="App">
            <NavBar />
            <MenuMobile />
            <div className="main" />
            <Suspense fallback={null}>
                <Home />
            </Suspense>
        </div>
    );
}

export default App;
