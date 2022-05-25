import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const queryClient = new QueryClient();
const stripePromise = loadStripe(
  "pk_test_51L2sXgF65j8JGYI7Esqw7JbRwzdYqdwhSDkR3Nc0pKE4ormrjsxeJSRWgZmflJmc8F8Iazdshcy0QaUEATogVfCd00tunE8JIm"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Elements stripe={stripePromise}><App /></Elements>
        
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
