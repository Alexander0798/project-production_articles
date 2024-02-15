import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
const meta = {
    title: "page/ProfilePage",
    component: ProfilePage,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];