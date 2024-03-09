import { Metadata } from 'next';
import { Button } from '@ui-kit/components/button/Button';
import { Screen } from '@ui-kit/layouts/screen/Screen';

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
};

export default async function NextPage() {
  return (
    <Screen>
      <h1>Page</h1>
      <Button>Button</Button>
    </Screen>
  );
}
