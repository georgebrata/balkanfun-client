import OfertePage from '@views/pages/OfertePage'
import GalerryPage from '@views/pages/GalerryPage'
import FAQPage from '@views/pages/FAQPage'
import { $utils } from '@helper'

export default [{
  path: '/oferte',
  component: OfertePage,
  fullpath: 'oferte',
  // isHideInMenu: true,
  meta: {
    title: $utils.titleLang('offers'),
  },
  children: [
    {
      path: 'oferta-1',
      fullpath: '/oferte/oferta-1',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Oferta 1'),
        ignoreAuth: true,
      },
      component: resolve => require(['@components/OfertaCard'], resolve),
    },
    {
      path: 'oferta-2',
      fullpath: '/oferte/oferta-2',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('Oferta 2'),
        ignoreAuth: true,
      },
      component: resolve => require(['@components/OfertaCard'], resolve),
    }, // se pot adauga oferte dinamic, in functie de raspunsul de la un server
  ],
}, {
  path: '/galerie',
  component: GalerryPage,
  fullpath: 'galerie',
  // isHideInMenu: true,
  meta: {
    title: $utils.titleLang('gallery'),
    ignoreAuth: true,
  },
}, {
  path: '/intrebari-frecvente',
  component: FAQPage,
  fullpath: 'intrebari-frecvente',
  // isHideInMenu: true,
  meta: {
    title: $utils.titleLang('faq'),
    ignoreAuth: true,
  },
}]
