import { addCollection } from '@iconify/vue'
//import heroicons from '@iconify-icons/heroicons'
import heroicons from '@iconify-json/heroicons/icons.json'
import icIcons from '@iconify-json/ic/icons.json'

export default defineNuxtPlugin(() => {
  addCollection(heroicons)
  addCollection(icIcons)
})