import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import Badge from "./index";
import "../dist/react-shields-badge.css";

const style = { margin: 20 };

function Demo() {
  const onClick = useCallback(() => {
    alert("badge is onClick");
  }, []);
  return (
    <React.Fragment>
      <div style={style}>
        <Badge data={["npm", "v2.0.2"]} />
        <Badge data={["build", "passing"]} />
        <Badge data={["npm", "v2.0.2", "passing"]} />
      </div>
      <div style={style}>
        <Badge data={["license", "MIT"]} />
        <Badge data={["license", "MIT"]} backgroundColor={["red", "orange"]} color={["#000", "#000"]} />
      </div>
      <div style={style}>
        <Badge data={["donload", "v2.0.2", "100/m"]} />
        <Badge data={["coverage", "99%"]} backgroundColor={["black", "green"]} />
        <Badge data={["dependencies", "up to date"]} backgroundColor={["black", "brightgreen"]} />
      </div>
      <div style={style}>
        <Badge data={["price", "$100 USD", "$200 CAD", "¥500 JPY", "$1000 CNY"]} onClick={onClick} />
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<Demo />, document.getElementById("index"));
