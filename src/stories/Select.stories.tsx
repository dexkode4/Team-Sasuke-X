import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
	Select as CustomSelect,
	SelectButton,
	SelectGroup,
	SelectList,
	SelectOption,
} from '../Select';

export default {
	title: 'Select',
	component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => (
	<CustomSelect {...args}>
		<SelectButton />
		<SelectList onSelect={(val) => {}}>
			<SelectOption value={1}>Option 1</SelectOption>
			<SelectOption value={2}>Option 2</SelectOption>
			<SelectOption value={3}>Option 3</SelectOption>
			<SelectOption value={4}>Option 4</SelectOption>
			<SelectOption value={5}>Option 5</SelectOption>
			<SelectOption value={6}>Option 6</SelectOption>
		</SelectList>
	</CustomSelect>
);

const TemplateGrouped: ComponentStory<typeof CustomSelect> = (args) => (
	<CustomSelect {...args}>
		<SelectButton />
		<SelectList onSelect={(val) => {}}>
			<SelectOption value={1}>Option 1</SelectOption>
			<SelectOption value={2}>Option 2</SelectOption>
			<SelectOption value={3}>Option 3</SelectOption>

			<SelectGroup label='Sub header'>
				<SelectOption value={4}>Option 4</SelectOption>
				<SelectOption value={5}>Option 5</SelectOption>
				<SelectOption value={6}>Option 6</SelectOption>
			</SelectGroup>
		</SelectList>
	</CustomSelect>
);

export const Default = Template.bind({});

Default.args = {
	placeholder: 'Select option',
	w: '300px',
	variant: 'outline',
};

export const Native = Template.bind({});

Native.args = {
	placeholder: 'Select option',
	w: '300px',
	variant: 'native',
};

export const Flushed = Template.bind({});

Flushed.args = {
	placeholder: 'Select option',
	w: '300px',
	variant: 'flushed',
};

export const DefaultGrouped = TemplateGrouped.bind({});

DefaultGrouped.args = {
	placeholder: 'Select option',
	w: '300px',
	variant: 'outline',
};

export const NativeGrouped = TemplateGrouped.bind({});

NativeGrouped.args = {
	placeholder: 'Select option',
	w: '300px',
	variant: 'native',
};

export const FlushedGrouped = TemplateGrouped.bind({});

FlushedGrouped.args = {
	placeholder: 'Select option',
	w: '300px',
	variant: 'flushed',
};
