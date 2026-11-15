import { createRoot } from "react-dom/client";
import { SocialPublisherApp } from "./SocialPublisherApp";

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(<SocialPublisherApp />);
}
