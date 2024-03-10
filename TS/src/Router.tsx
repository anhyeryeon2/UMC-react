import { BrowserRouter,Routes, Route} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";



function Router() {
    return <BrowserRouter>
    <Routes>
    <Route path="/:coinID" element={<Coins/>}></Route>
    <Route path="/" element={<Coin/>}></Route>
    </Routes>
    </BrowserRouter>;
}

export default Router;