import PageFour from "./pages/PageFour";
import PageOne from "./pages/pageOne";
import PageTree from "./pages/PageTree";
import PageTwo from "./pages/PageTwo";

import StepWizard, { StepWizardChildProps } from "react-step-wizard";


import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>
      <GlobalStyles />
      <StepWizard className="wizard" nav={<Test />}>
        <PageOne />
        <PageTwo />
        <PageTree />
        <PageFour />
      </StepWizard >

    </>
  );
}

interface Props extends Partial<StepWizardChildProps> { }
function Test(props: Props) {
console.log(props)
  return (
    <div className="nav">
      {Array.from(Array(props?.totalSteps).keys()).map(step => (
        <button>{step + 1}</button>
      ))}
    </div>
  )
}
export default App;
