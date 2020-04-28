import { shallow } from "enzyme";
import React from "react";
import { SideBarBase } from "../SideBar";

describe("Side bar", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SideBarBase classes={{}} posts={[]} />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
  //TODO: mock useffect and check if getPosts is having call
});
