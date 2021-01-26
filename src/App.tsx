import React from "react";
import { Routes } from "./routes/Routes";
import { Desktopnavigation } from "./components/navigation/desktopnavigation/Desktopnavigation";
import { UserProvider } from "./shared/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Desktopnavigation />
      </Routes>
    </UserProvider>
  );
}

export default App;
