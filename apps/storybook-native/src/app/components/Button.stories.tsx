import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/button/Button.native';
import { View } from 'react-native';

// Config
//

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  decorators: [
    (Story) => (
      <View className='p-4'>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Stories
//

// Default
//

export const DefaultButton: Story = {
  render: () => <Button>Submit</Button>,
};
