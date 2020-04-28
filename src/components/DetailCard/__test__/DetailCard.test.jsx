import { shallow } from "enzyme";
import React from "react";
import { DetailCardBase } from "../DetailCard";

describe("Detail Card", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<DetailCardBase classes={{}} />);

    expect(wrapper.exists()).toBe(true);
  });
  //TODO: find childrens
});
