import 'uno.css'
import '@unocss/reset/tailwind.css'

import './assets/sass/style.sass'


const openSidebar = () => {
  document.querySelector<HTMLDivElement>('#sidebar')?.classList.add('left-0')
}
const closeSidebar = () => {
  document.querySelector<HTMLDivElement>('#sidebar')?.classList.remove('left-0')
}

const start = () => {
  document.querySelector<HTMLButtonElement>('#sidebar-open')?.addEventListener('click', openSidebar)
  document.querySelector<HTMLDivElement>('#sidebar-close')?.addEventListener('click', closeSidebar)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start()
}
