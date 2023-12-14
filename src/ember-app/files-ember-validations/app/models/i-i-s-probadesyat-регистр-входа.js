import {
  defineNamespace,
  defineProjections,
  Model as РегистрВходаMixin
} from '../mixins/regenerated/models/i-i-s-probadesyat-регистр-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
