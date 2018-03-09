import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HatDetail from '../../HatDetail';

storiesOf('Hat Shop', module)
  .add('Hat details', () => (
    <HatDetail />
  ));
