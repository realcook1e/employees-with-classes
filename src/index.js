import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const elem = (
	<div>
		<h1>a</h1>
		<input type="text" />
		<button></button>
	</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
