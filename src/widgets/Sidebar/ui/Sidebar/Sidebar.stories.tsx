import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "widget/Sidebar",
    component: Sidebar,
    decorators: [StoreDecorator({ user: { authData: { id: "1", username: "2fsd" }, _mounted: true } })],
    tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const NoAuth: Story = {
    args: {},
};
NoAuth.decorators = [StoreDecorator({})];
