import './assets/main.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrashCan, faXmarkCircle, faSquarePlus, faFlag} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faTrashCan, faXmarkCircle, faSquarePlus, faFlag)

import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'

const pinia = createPinia();

createApp(App).use(router).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
