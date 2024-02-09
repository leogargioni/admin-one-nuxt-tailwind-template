import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact
} from '@mdi/js'

export default [
  {
    to: '/HomeView',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: '/TablesView',
    label: 'Tables',
    icon: mdiTable
  },
  {
    to: '/FormsView',
    label: 'Forms',
    icon: mdiSquareEditOutline
  },
  {
    to: '/UiView',
    label: 'UI',
    icon: mdiTelevisionGuide
  },
  {
    to: '/ResponsiveView',
    label: 'Responsive',
    icon: mdiResponsive
  },
  {
    to: '/StyleView',
    label: 'Styles',
    icon: mdiPalette
  },
  {
    to: '/ProfileView',
    label: 'Profile',
    icon: mdiAccountCircle
  },
  {
    to: '/',
    label: 'Login',
    icon: mdiLock
  },
  {
    to: '/ErrorView',
    label: 'Error',
    icon: mdiAlertCircle
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One'
      },
      {
        label: 'Item Two'
      }
    ]
  },
  {
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank'
  },
  {
    href: 'https://github.com/justboil/admin-one-react-tailwind',
    label: 'React version',
    icon: mdiReact,
    target: '_blank'
  }
]
