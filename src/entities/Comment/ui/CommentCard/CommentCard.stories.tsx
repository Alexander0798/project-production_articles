import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentCard } from "./CommentCard";
const meta = {
    title: "entities/CommentCard",
    component: CommentCard,
    args: {
        comment: { id: "1", text: "comment ", user: { id: "1", username: "admin" } },
    },
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
