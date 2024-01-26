import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ThemeButton } from "./Button";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
const meta = {
    title: "shared/Button",
    component: Button,

    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Secondary: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
};
export const OutlineSizeL: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL
    },
};
export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BACKGROUND,
    },
};
export const BackgroundInverted: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
};
export const Square: Story = {
    args: {
        children: ">",
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
    },
};
export const SquareSizeL: Story = {
    args: {
        children: ">",
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: ">",
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
