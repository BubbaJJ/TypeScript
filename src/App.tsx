import React from "react";
import { Routes } from "./routes/Routes";
import { Desktopnavigation } from "./components/navigation/desktopnavigation/Desktopnavigation";
import { UserProvider } from "./shared/provider/UserProvider";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Navigation />
      </Routes>
    </UserProvider>
  );
}

export default App;
