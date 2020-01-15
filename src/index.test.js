import React from "react";
import { mount } from "enzyme";
import Badge from "./index.js";

let clickOk = false;
function click() {
  clickOk = true;
}

describe("react-shields-badge", () => {
  const controls = mount(<Badge data={["npm", "v2.0.2"]} onClick={click} />);
  const controls_2 = mount(
    <Badge
      data={["npm", "v2.0.2"]}
      backgroundColor={["#fff", "rgb(111, 66, 193)"]}
      color={["rgb(0, 0, 0)"]}
    />
  );
  const controls_3 = mount(<Badge data="111" />);

  it("Should badge render data correct", () => {
    controls.instance();
    expect(controls.find(".rc-shields-badge").length).toBe(2);
  });
  it("Should badge clickable", () => {
    controls.instance();
    controls_2.instance();
    controls.find(".rc-shields").simulate("click");
    controls_2.find(".rc-shields").simulate("click");
    expect(clickOk).toBe(true);
  });
  it("Should badge backgroundColor correct", () => {
    controls_2.instance();
    const badge2 = controls_2
      .find(".rc-shields-badge")
      .at(1)
      .getDOMNode();
    expect(
      badge2.getAttribute("style") ===
        "background-color: rgb(111, 66, 193); color: rgb(0, 0, 0);"
    ).toBe(true);
  });

  it("Should data is array", () => {
    let c3 = controls_3.instance();
    expect(c3).toBe(null);
  });
});
