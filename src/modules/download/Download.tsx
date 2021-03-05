import useA2HS from "hooks/useA2HS";
import React from "react";

const Download = () => {
  const { outcome, enabled } = useA2HS();

  return (
    <div>
      {enabled ? (
        <div>
          {outcome === "accepted"
            ? "Downloaded"
            : "You did not authorize the download."}
        </div>
      ) : (
        <div>
          You must be on a mobile phone or tablet to download the app. Use the
          web app if you are on a desktop or laptop computer.
        </div>
      )}
    </div>
  );
};

export default Download;
