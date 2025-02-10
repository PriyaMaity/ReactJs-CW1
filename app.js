const root = document.getElementById("root");

// const h1Element = React.createElement('h1', 'Hello', 'H1 Tag');
// console.log(h1Element);

const H1Tag = React.createElement(
  "div",
  { className: "heading" },
  React.createElement("h1", { className: "header" }, "Main Heading: H1 Tag"),
);
console.log(H1Tag);

const FirstDiv = React.createElement(
  "div",
  { className: "section"},
  React.createElement("p", null, "This is the first div containing a simple paragraph.")
);
console.log(FirstDiv);

const SecondDiv = React.createElement(
  "div",
  { className: "section"},
  React.createElement("p", null, "This is the second div containing a paragraph and an anchor tag."),
  React.createElement(
    "a",
    { href: "https://reactjs.org", target: "_blank" },
    "Learn more about React"
  )
);
console.log(SecondDiv);

const LastDivWithP = React.createElement(
  "div",
  { className: "section"},
  React.createElement("p", null, "This is the last div, demonstrating the use of a single paragraph for content.")
);
console.log(LastDivWithP);

const App = React.createElement(
  "div",
  null,
  H1Tag,
  FirstDiv,
  SecondDiv,
  LastDivWithP
);

ReactDOM.render(App, root);