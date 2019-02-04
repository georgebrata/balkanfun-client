import OffersPage from '@views/pages/OffersPage'
import GalleryPage from '@views/pages/GalleryPage'
import FAQPage from '@views/pages/FAQPage'
import ContactPage from '@views/pages/ContactPage'
import AboutUsPage from '@views/pages/AboutUsPage'
import HomePage from '@views/pages/HomePage'

import List from '@views/demo/List'
import {
 $utils,
} from '@helper'

export default [{
 path: '/',
 component: FullWidthPage,
 fullpath: '/',
 // isHideInMenu: true,
 meta: {
  title: $utils.titleLang('Acasa'),
  ignoreAuth: true,
 },
 children: [{
   path: 'offer1',
   fullpath: '/offer/offer1',
   isHideInMenu: false,
   meta: {
    title: $utils.titleLang('Oferta 1'),
    ignoreAuth: true,
   },
   component: resolve => require(['@views/partials/OffersGrid'], resolve),
  },
  {
   path: 'offer',
   fullpath: '/offer/offer2',
   meta: {
    title: $utils.titleLang('Oferta 2'),
    ignoreAuth: true,
   },
   component: resolve => require(['@views/partials/OffersGrid'], resolve),
  },
 ],
}]


/*
export default [
  {
  path: '/offers',
  component: OffersPage,
  fullpath: 'offers',
  // isHideInMenu: true,
  meta: {
    title: $utils.titleLang('Oferte'),
    ignoreAuth: true,
  },
  children: [
    {
      path: 'offer1',
      fullpath: '/offer/offer1',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Oferta 1'),
        ignoreAuth: true,
      },
      component: resolve => require(['@views/partials/OffersGrid'], resolve),
    },
    {
      path: 'offer',
      fullpath: '/offer/offer2',
      meta: {
        title: $utils.titleLang('Oferta 2'),
        ignoreAuth: true,
      },
      component: resolve => require(['@views/partials/OffersGrid'], resolve),
    },
  ],
},
{
  path: '/gallery',
  component: GalleryPage,
  fullpath: 'gallery',
  isHideInMenu: false,
  meta: {
    title: $utils.titleLang('Galerie'),
    ignoreAuth: true,
  },
},
{
  path: '/contact',
  component: ContactPage,
  fullpath: 'contact',
  isHideInMenu: false,
  meta: {
    title: $utils.titleLang('Contact'),
    ignoreAuth: true,
  },
},
{
  path: '/about-us',
  component: AboutUsPage,
  fullpath: 'about-us',
  isHideInMenu: false,
  meta: {
    title: $utils.titleLang('Despre noi'),
    ignoreAuth: true,
  },
},
{
  path: '/faq',
  component: FAQPage,
  fullpath: 'faq',
  isHideInMenu: false,
  meta: {
    title: $utils.titleLang('Intrebari frecvente'),
    ignoreAuth: true,
  },
},
  {
  path: '/',
  component: FAQPage,
  fullpath: '/',
  // isHideInMenu: true,
  components: [],
  meta: {
    title: $utils.titleLang('Acasa'),
    ignoreAuth: true,
  }},
]
*/
