import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/button/Button';

// Config
//

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

// Stories
//

// Sandbox Button
//

export const SandboxButton: Story = {
  render: (props) => (
    <Button type='button' {...props}>
      Submit
    </Button>
  ),
  args: {},
  argTypes: {},
};

// Default
//

export const DefaultButton: Story = {
  render: () => <Button type='button'>Submit</Button>,
};
