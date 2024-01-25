import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";
const meta = {
    title: "page/AboutPage",
    component: AboutPage,

    tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
