const parent = React.createElement(
    "div", 
    { id: "parent" }
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from re  act"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
