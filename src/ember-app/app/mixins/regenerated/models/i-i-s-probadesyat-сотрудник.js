import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-probadesyat-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  телефон: {
    descriptionKey: 'models.i-i-s-probadesyat-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probadesyat-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-probadesyat-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-probadesyat-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    должности: belongsTo('i-i-s-probadesyat-должности', 'Должности', {
      должность: attr('Должность', { index: 3, hidden: true }),
      карта: belongsTo('i-i-s-probadesyat-карта', '', {
        кодКарты: attr('Номер карты', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-probadesyat-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    должности: belongsTo('i-i-s-probadesyat-должности', 'Должность', {
      должность: attr('Должность', { index: 2 }),
      карта: belongsTo('i-i-s-probadesyat-карта', '', {
        кодКарты: attr('Номер карты', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
