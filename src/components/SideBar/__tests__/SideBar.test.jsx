import { shallow } from "enzyme";
import React from "react";
import { SideBarBase } from "../SideBar";

describe("Side bar", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SideBarBase classes={{}} />);

    expect(wrapper.exists()).toBe(true);
  });
});
