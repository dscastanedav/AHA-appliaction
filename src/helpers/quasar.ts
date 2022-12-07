import { Notify, Dialog } from 'quasar';
import iconSet from 'quasar/icon-set/svg-mdi-v6';

Notify.setDefaults({
  position: 'bottom-left',
  timeout: 2000,
});

export const QuasarConfig = {
  iconSet,
  plugins: {
    Notify,
    Dialog,
  },
}
