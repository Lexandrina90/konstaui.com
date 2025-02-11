import { SidebarMenu } from './SidebarMenu';

const links = [
  {
    title: 'Get Started',
    links: [
      { title: 'Introduction', href: '/vue' },
      'Kitchen Sink',
      'Installation',
      'Usage',
      { title: 'Usage with Framework7', href: '/vue/framework7' },
      { title: 'Usage with Ionic', href: '/vue/ionic' },
      { title: 'Usage with Nuxt', href: '/vue/nuxt' },
    ],
  },
  {
    title: 'Utilities',
    links: [
      'Colors',
      'Theme Variants',
      'Hairlines',
      'Safe Areas',
      'Touch Ripple',
      'Translucent',
      'Touch Action',
      { title: 'useTheme', href: '/vue/use-theme' },
      'Fonts',
    ],
  },
  {
    title: 'Components',
    links: [
      {
        title: 'KonstaProvider',
        href: '/vue/konsta-provider',
      },
      'App',
      'Action Sheet',
      'Badge',
      'Block',
      'Breadcrumbs',
      'Button',
      'Card',
      'Checkbox',
      'Chip',
      'Contacts List',
      'Dialog',
      { title: 'Floating Action Button', href: '/vue/fab' },
      'Icon',
      'Link',
      'List',
      'List Button',
      'List Input',
      'List Item',
      'Menu List',
      'Messagebar',
      'Messages',
      'Navbar',
      'Notification',
      'Page',
      { title: 'Panel / Side Panels', href: '/vue/panel' },
      'Popover',
      'Popup',
      'Preloader',
      'Progressbar',
      'Radio',
      { title: 'Range Slider', href: '/vue/range' },
      'Searchbar',
      { title: 'Segmented Control', href: '/vue/segmented' },
      { title: 'Sheet Modal', href: '/vue/sheet' },
      'Stepper',
      'Tabbar',
      'Toast',
      'Toggle',
      'Toolbar',
    ],
  },
];

export const SidebarMenuVue = () => <SidebarMenu links={links} root="vue" />;
