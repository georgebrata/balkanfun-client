import GalleryPage from '@views/pages/GalleryPage'
import FAQPage from '@views/pages/FAQPage'
import ContactPage from '@views/pages/ContactPage'
import AboutUsPage from '@views/pages/AboutUsPage'
import HomePage from '@views/pages/HomePage'
import TripPage from '@views/pages/TripPage'
import CheckoutPage from '@views/pages/CheckoutPage'

import PageFrame from '@views/partials/PageFrame'
import { $utils } from '@helper'

export default [{
  path: '/',
  component: PageFrame,
  fullpath: '/',
  isHideInMenu: true,
  meta: {
    title: $utils.titleLang('Home'),
    ignoreAuth: true
  },
  children: [
    {
      path: '/',
      fullpath: '/',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Acasa'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/HomePage'], resolve)
    },
    {
      path: 'offers',
      fullpath: '/offers',
      meta: {
        title: $utils.titleLang('Oferte'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/OffersPage'], resolve)
    },
    {
      path: 'trip',
      fullpath: '/trip',
      isHideInMenu: true,
      meta: {
        title: $utils.titleLang('Trip'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/TripPage'], resolve)
    },
    {
      path: 'checkout',
      fullpath: '/checkout',
      isHideInMenu: true,
      meta: {
        title: $utils.titleLang('Checkout'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/CheckoutPage'], resolve)
    },
    {
      path: 'gallery',
      fullpath: '/gallery',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Galerie'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/GalleryPage'], resolve)
    },
    {
      path: 'faq',
      fullpath: '/intrebari-frecvente',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Intrebari frecvente'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/FAQPage'], resolve)
    },
    {
      path: 'about-us',
      fullpath: '/despre-noi',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Despre noi'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/AboutUsPage'], resolve)
    },
    {
      path: 'contact',
      fullpath: '/contact',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Conatct'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/pages/ContactPage'], resolve)
    },
  ]
}]
