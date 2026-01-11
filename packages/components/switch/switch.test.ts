import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Switch from "./switch.vue";

describe("Switch", () => {
  it("renders properly", () => {
    const wrapper = mount(Switch);
    expect(wrapper.text()).toContain("");
  });

  it("renders properly", () => {
    const wrapper = mount(Switch, {
      props: {
        value: true,
      },
    });
    expect(wrapper.text()).toContain("");
  });
});
