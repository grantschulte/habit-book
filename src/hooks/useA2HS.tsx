import { useEffect, useState } from "react";

const useA2HS = () => {
  const [enabled, setEnabled] = useState(false);
  const [outcome, setOutcome] = useState("");

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (promptEvent: any) => {
      promptEvent.preventDefault();
      promptEvent.prompt();
      console.log("enabled");
      setEnabled(true);
      promptEvent.userChoice.then((choice: { outcome: string }) => {
        if (choice.outcome === "accepted") {
          setOutcome("accepted");
          console.log("User accepted the A2HS prompt");
        } else {
          setOutcome("dismissed");
          console.log("User dismissed the A2HS prompt");
        }
        promptEvent = null;
      });
    });
  }, []);

  return {
    enabled,
    outcome,
  };
};

export default useA2HS;
