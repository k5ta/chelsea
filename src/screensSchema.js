import ScreenWelcome from '@/components/ScreenWelcome'
import ScreenAbout from '@/components/ScreenAbout'
import ScreenInsta from '@/components/ScreenInsta'
import ScreenPrices from '@/components/ScreenPrices'
import ScreenAbonements from '@/components/ScreenAbonements'
import ScreenMasters from '@/components/ScreenMasters'
import ScreenContacts from '@/components/ScreenContacts'
import Gallery from '@/components/Gallery'

export default {
  home: {
    fullPaths: [ '/', '/about', '/insta', '/prices', '/masters', '/abonements', '/contacts', '#footer' ],
    screens: [
      {
        path: '',
        component: ScreenWelcome,
        theme: 'white'
      },
      {
        path: 'about',
        component: ScreenAbout
      },
      {
        path: 'insta',
        component: ScreenInsta
      },
      {
        path: 'prices',
        component: ScreenPrices
      },
      {
        path: 'masters',
        component: ScreenMasters,
        theme: 'white',
        routerProps: {
          itemsPerRow: 3,
        },
        standaloneProps: {
          itemsPerRow: 1,
        }
      },
      {
        path: 'abonements',
        component: ScreenAbonements,
        theme: 'white'
      },
      {
        path: 'contacts',
        component: ScreenContacts
      }
    ]
  },
  gallery: {
    fullpath: '/gallery',
    path: 'gallery',
    component: Gallery
  }
}
