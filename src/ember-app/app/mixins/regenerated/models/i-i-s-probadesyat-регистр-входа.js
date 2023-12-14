import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  комната: DS.belongsTo('i-i-s-probadesyat-комната', { inverse: null, async: false }),
  входГостя: DS.hasMany('i-i-s-probadesyat-вход-гостя', { inverse: 'регистрВхода', async: false }),
  входСотрудника: DS.hasMany('i-i-s-probadesyat-вход-сотрудника', { inverse: 'регистрВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadesyat-регистр-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probadesyat-регистр-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-probadesyat-регистр-входа.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  входСотрудника: {
    descriptionKey: 'models.i-i-s-probadesyat-регистр-входа.validations.входСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрВходаE', 'i-i-s-probadesyat-регистр-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probadesyat-комната', 'Комната', {
      номерКомнаты: attr('Номер комнаты', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерКомнаты' }),
    входГостя: hasMany('i-i-s-probadesyat-вход-гостя', 'Вход гостя', {
      гость: belongsTo('i-i-s-probadesyat-гость', 'Гость', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        карта: belongsTo('i-i-s-probadesyat-карта', '', {
          кодКарты: attr('Номер карты', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    }),
    входСотрудника: hasMany('i-i-s-probadesyat-вход-сотрудника', 'Вход сотрудника', {
      сотрудник: belongsTo('i-i-s-probadesyat-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должности: belongsTo('i-i-s-probadesyat-должности', '', {
          должность: attr('Должность', { index: 2 }),
          карта: belongsTo('i-i-s-probadesyat-карта', '', {
            кодКарты: attr('Номер карты', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РегистрВходаL', 'i-i-s-probadesyat-регистр-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probadesyat-комната', 'Номер комнаты', {
      номерКомнаты: attr('Номер комнаты', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
