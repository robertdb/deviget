import { shallow } from "enzyme";
import React from "react";
import { RightSideBase } from "../RightSide";

describe("Right Side ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RightSideBase classes={{}} />);

    expect(wrapper.exists()).toBe(true);
  });
});
