// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Cronometer from './Cronometer';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Cronometer />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Cronometer from "./Cronometer";
import Test from "./Test";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cronometer />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);