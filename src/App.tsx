import PageFive from "./pages/PageFive";
import PageFour from "./pages/PageFour";
import PageOne from "./pages/pageOne";
import PageTree from "./pages/PageTree";
import PageTwo from "./pages/PageTwo";

import StepWizard from "react-step-wizard";


import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>
      <GlobalStyles />
      <StepWizard>
        <PageOne />
        <PageTwo />
        <PageTree />
        <PageFour />
        <PageFive />
      </StepWizard >

    </>
  );
}

export default App;
