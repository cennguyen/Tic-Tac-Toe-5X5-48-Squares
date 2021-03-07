import React from "react";
class ShoppingList extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "shopping-list",
      },
      React.createElement("h1", null, "Rule for Tic Tac Toe  "),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "got 5 'X' or 5 'O' stick together and you can win"
        ),
        React.createElement("li", null, "Do the best "),
        React.createElement("li", null, "Try to hack your enemies brand :v"),
        React.createElement("li", null, "Good Luck")
      )
    );
  }
}
export default ShoppingList;
