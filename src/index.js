import React from "react";
import ReactDOM from "react-dom";
import Badge from "react-shields-badge";
import "react-shields-badge/dist/react-shields-badge.css";

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  onClick = () => {
    alert("badge is onClick");
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: 20 }}>
          <Badge data={["npm", "v2.0.2"]} />
          <Badge data={["build", "passing"]} />
          <Badge data={["npm", "v2.0.2", "passing"]} />
        </div>
        <div style={{ margin: 20 }}>
          <Badge data={["license", "MIT"]} />
          <Badge
            data={["license", "MIT"]}
            backgroundColor={["red", "orange"]}
            color={["yellowgreen", "#000"]}
          />
        </div>
        <div style={{ margin: 20 }}>
          <Badge data={["donload", "v2.0.2", "100/m"]} />
          <Badge data={["coverage", "99%"]} backgroundColor={["black", "green"]} />
          <Badge data={["dependencies", "up to date"]} backgroundColor={["black", "brightgreen"]} />
        </div>
        <div style={{ margin: 20 }}>
          <Badge data={["price", "$100 USD", "$200 CAD", "¥500 JPY", "$1000 CNY"]} onClick={this.onClick} />
        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("index"));
