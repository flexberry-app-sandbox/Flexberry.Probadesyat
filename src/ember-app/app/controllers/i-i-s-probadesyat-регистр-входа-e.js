import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-probadesyat-регистр-входа-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-probadesyat-вход-гостя+гость':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'гость',
            projection: 'ГостьL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-probadesyat-вход-сотрудника+сотрудник':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'сотрудник',
            projection: 'СотрудникL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
