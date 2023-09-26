import ReactJoyride from "react-joyride";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { stepsByRoute } from "./stepsByRoute";

const Tour = () => {
  const tourRun = localStorage.getItem("tour");
  const location = useLocation();

  const handleTourCallback = (data) => {
    // Manipule os eventos do passeio, como a conclusão do passeio, aqui
    if (data.status === "finished") {
      localStorage.setItem("tour", false); // Encerra o passeio quando estiver concluído
    }
  };

  const getCurrentSteps = () => {
    return stepsByRoute[location.pathname] || [];
  };
  const [currentSteps, setCurrentSteps] = useState(getCurrentSteps());

  useEffect(() => {
    setCurrentSteps(getCurrentSteps());
    console.log(currentSteps, tourRun);
  }, [location.pathname]);

  return (
    <ReactJoyride
      steps={currentSteps}
      run={tourRun === "true" ? true : false}
      continuous
      callback={handleTourCallback}
      disableScrolling
      showSkipButton
      hideCloseButton
      showProgress
    />
  );
};

export default Tour;
