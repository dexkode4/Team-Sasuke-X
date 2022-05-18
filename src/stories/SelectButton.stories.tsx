import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectButton as CustomSelectButton  } from '../Select';


export default {
	title: 'Select',
	component: CustomSelectButton,
} as ComponentMeta<typeof CustomSelectButton>;

const Template: ComponentStory<typeof CustomSelectButton> = (args) => (
	<CustomSelectButton {...args} />
);


export const SelectButton = Template.bind({});

SelectButton.args = {
    icon: <>🇳🇬</>,
    onOpen: () => {}
};
