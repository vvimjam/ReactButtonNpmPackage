import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Button, { ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
} as Meta;


const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = { variant: "contained" };


export const Outlined = Template.bind({});
Outlined.args = { variant: "outlined" };
