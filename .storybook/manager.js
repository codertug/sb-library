import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import mytheme from './mytheme';

addons.setConfig({
  theme: mytheme,
});