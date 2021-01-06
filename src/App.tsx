import { defineComponent } from 'vue'
import { GreenCounter, RedCounter } from './components/Counter';

import VueLogoSrc from './assets/logo.png'
import './App.css'

export default defineComponent({
  name: 'App',
  components: {
    GreenCounter,
    RedCounter,
  },
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={VueLogoSrc} />
        <GreenCounter startCount={3} />
        <RedCounter startCount={-1} />
      </>
    );
  }
})
