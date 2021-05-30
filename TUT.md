## Storybook KickOff
Pull it from template
 - npx degit chromaui/intro-storybook-react-template taskbox

install dependencies
 - yarn install

start storybook
- yarn storybook

## Storybook setup with Typescript
- create react app with template as typescript
- add storybook using sb init <code>npx -p @storybook/cli sb init</code>
- remove App.tsx & App.test.tsx 
### simple component addition
- create a folder named components
- maybe create folder for component - SimpleInput
  - create component SimpleInput.tsx
  - create story SimpleInput.stories.tsx
  - Important point which is required while we creating stories
  <pre>
     export default {
                title: 'Basic/SimpleInput',
                component: SimpleInput,
                argTypes: {
                  backgroundColor: { control: 'color' },
                },
           } as Meta;
    </pre>


### Theming SB
- create manager.js inside .storybook 
- install <code>yarn add --dev @storybook/addons @storybook/theming</code>
- lets add default theme using following code in manager.js
    <code>
      
      import { addons } from '@storybook/addons';
      import { themes } from '@storybook/theming';
      addons.setConfig({
        theme: themes.dark,
      });
      
    </code>
- lets configure our brand  theme using following code in manager.js
    <code>
      
      import { addons } from '@storybook/addons';
      import mytheme from './mytheme';
      addons.setConfig({
        theme: mytheme,
      });
      
    </code>    
- mytheme - could contain brand name etc
  

## Deployment on Vercel
- create an account
- attach git repo
- configure npm run build-storybook command
- configura folder storybook-static 

And get everything deployed [live](https://sb-library.vercel.app/?path=/story/example-introduction--page)

