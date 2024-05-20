import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VAppBarTitle,
  VNavigationDrawer,
  VProgressCircular,
  VMain,
  VTabs,
  VTab,
  VTabsWindow,
  VTabsWindowItem,
  VBtn,
  VDialog,
  VCard,
  VCardText,
  VCardActions,
  VSpacer,
  VMenu,
  VList,
  VListItem,
  VDataTableVirtual,
  VIcon,
  VCheckbox
} from 'vuetify/components'
import { VTreeview } from 'vuetify/labs/VTreeview'

const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAppBarTitle,
    VNavigationDrawer,
    VProgressCircular,
    VMain,
    VTabs,
    VTab,
    VTabsWindow,
    VTabsWindowItem,
    VBtn,
    VDialog,
    VCard,
    VCardText,
    VCardActions,
    VSpacer,
    VMenu,
    VList,
    VListItem,
    VDataTableVirtual,
    VIcon,
    VCheckbox,
    VTreeview
  }
})

export default vuetify
