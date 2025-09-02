import ReactDOM from "react-dom";

export const TeleportToRoot = ({ children }) => {
  const root = document.getElementById("root");

  if (!root) {
    console.warn(
      "TeleportToRoot: Root element not found! Component won't be rendered."
    );

    return null;
  }

  return ReactDOM.createPortal(children, root);
};