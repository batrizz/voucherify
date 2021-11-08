import PageFour from "./pages/PageFour";
import PageOne from "./pages/pageOne";
import PageTree from "./pages/PageTree";
import PageTwo from "./pages/PageTwo";
import 'animate.css';

import StepWizard, { StepWizardChildProps } from "react-step-wizard";


import { GlobalStyles } from "./styles/global"
import { useState } from "react";


function App() {


  return (
    <>
      <GlobalStyles />
      <StepWizard className="wizard " nav={<Navegation />}>
        <PageOne />
        <PageTwo />
        <PageTree />
        <PageFour />
      </StepWizard >
    </>
  );
}

interface Props extends Partial<StepWizardChildProps> { }

function Navegation(props: Props) {
  
  const Current = Number(props.currentStep) -1;

  return (
    <div className="nav">
      {Array.from(Array(props?.totalSteps).keys()).map(step => (
        <button className={`${ Current === step ? "active" : step < Current ? "actived" : "" }`}>{step + 1}</button>
      ))}
    </div>
  )
}
export default App;
