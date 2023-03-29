import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import {FaqPage} from "./pages/FaqPage";
import { useContext } from "react";
import { AppContext} from "./contexts/AppContext"

function App() {
  const context = useContext(AppContext);

if(context.error !== null) {
  return(
    <div>
      <h1>Error!</h1>
      <div>Somethin went wrong:  {context.error.toString()} </div>
    </div>
  );
}

  

  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignInPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/faq" element={<FaqPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
