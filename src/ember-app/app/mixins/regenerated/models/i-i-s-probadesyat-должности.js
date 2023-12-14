import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  кодДолжности: DS.attr('number'),
  карта: DS.belongsTo('i-i-s-probadesyat-карта', { inverse: null, async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-probadesyat-должности.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  кодДолжности: {
    descriptionKey: 'models.i-i-s-probadesyat-должности.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-probadesyat-должности.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-probadesyat-должности', {
    кодДолжности: attr('Код должности', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    карта: belongsTo('i-i-s-probadesyat-карта', 'Карта', {
      кодКарты: attr('Код карты', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-probadesyat-должности', {
    кодДолжности: attr('Код должности', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    карта: belongsTo('i-i-s-probadesyat-карта', 'Код карты', {
      кодКарты: attr('Код карты', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
