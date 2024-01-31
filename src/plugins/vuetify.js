/* Vuetify setup
    https://vuetifyjs.com/en/getting-started/installation/#installation
*/
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Theme Configuration
const customTheme = {
  dark: false,
  colors: {
      background: '#FFF',
      primary: '#333333',
      secondary: '#48A9A6',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
  }
};

// Initialize vuetify
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md
    }
  }
})

export default vuetify;