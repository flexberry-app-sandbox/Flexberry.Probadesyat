import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbadesyatГостьLForm from './forms/i-i-s-probadesyat-гость-l';
import IISProbadesyatДолжностиLForm from './forms/i-i-s-probadesyat-должности-l';
import IISProbadesyatКартаLForm from './forms/i-i-s-probadesyat-карта-l';
import IISProbadesyatКомнатаLForm from './forms/i-i-s-probadesyat-комната-l';
import IISProbadesyatРегистрВходаLForm from './forms/i-i-s-probadesyat-регистр-входа-l';
import IISProbadesyatСотрудникLForm from './forms/i-i-s-probadesyat-сотрудник-l';
import IISProbadesyatГостьEForm from './forms/i-i-s-probadesyat-гость-e';
import IISProbadesyatДолжностиEForm from './forms/i-i-s-probadesyat-должности-e';
import IISProbadesyatКартаEForm from './forms/i-i-s-probadesyat-карта-e';
import IISProbadesyatКомнатаEForm from './forms/i-i-s-probadesyat-комната-e';
import IISProbadesyatРегистрВходаEForm from './forms/i-i-s-probadesyat-регистр-входа-e';
import IISProbadesyatСотрудникEForm from './forms/i-i-s-probadesyat-сотрудник-e';
import IISProbadesyatВходГостяModel from './models/i-i-s-probadesyat-вход-гостя';
import IISProbadesyatВходСотрудникаModel from './models/i-i-s-probadesyat-вход-сотрудника';
import IISProbadesyatГостьModel from './models/i-i-s-probadesyat-гость';
import IISProbadesyatДолжностиModel from './models/i-i-s-probadesyat-должности';
import IISProbadesyatКартаModel from './models/i-i-s-probadesyat-карта';
import IISProbadesyatКомнатаModel from './models/i-i-s-probadesyat-комната';
import IISProbadesyatРегистрВходаModel from './models/i-i-s-probadesyat-регистр-входа';
import IISProbadesyatСотрудникModel from './models/i-i-s-probadesyat-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probadesyat-вход-гостя': IISProbadesyatВходГостяModel,
    'i-i-s-probadesyat-вход-сотрудника': IISProbadesyatВходСотрудникаModel,
    'i-i-s-probadesyat-гость': IISProbadesyatГостьModel,
    'i-i-s-probadesyat-должности': IISProbadesyatДолжностиModel,
    'i-i-s-probadesyat-карта': IISProbadesyatКартаModel,
    'i-i-s-probadesyat-комната': IISProbadesyatКомнатаModel,
    'i-i-s-probadesyat-регистр-входа': IISProbadesyatРегистрВходаModel,
    'i-i-s-probadesyat-сотрудник': IISProbadesyatСотрудникModel
  },

  'application-name': 'Probadesyat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probadesyat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probadesyat',
          title: 'Probadesyat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-probadesyat-карта-l': {
            caption: 'Карта',
            title: ''
          },
          'i-i-s-probadesyat-комната-l': {
            caption: 'Комната',
            title: ''
          },
          клиенты: {
            caption: 'Клиенты',
            title: 'Клиенты',
            'i-i-s-probadesyat-гость-l': {
              caption: 'Гость',
              title: 'Гость'
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probadesyat-регистр-входа-l': {
              caption: 'Регистрация входа',
              title: 'Регистр входа'
            }
          },
          персонал: {
            caption: 'Персонал',
            title: 'Персонал',
            'i-i-s-probadesyat-должности-l': {
              caption: 'Должности',
              title: 'Должности'
            },
            'i-i-s-probadesyat-сотрудник-l': {
              caption: 'Сотрудник',
              title: 'Сотрудник'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probadesyat-гость-l': IISProbadesyatГостьLForm,
    'i-i-s-probadesyat-должности-l': IISProbadesyatДолжностиLForm,
    'i-i-s-probadesyat-карта-l': IISProbadesyatКартаLForm,
    'i-i-s-probadesyat-комната-l': IISProbadesyatКомнатаLForm,
    'i-i-s-probadesyat-регистр-входа-l': IISProbadesyatРегистрВходаLForm,
    'i-i-s-probadesyat-сотрудник-l': IISProbadesyatСотрудникLForm,
    'i-i-s-probadesyat-гость-e': IISProbadesyatГостьEForm,
    'i-i-s-probadesyat-должности-e': IISProbadesyatДолжностиEForm,
    'i-i-s-probadesyat-карта-e': IISProbadesyatКартаEForm,
    'i-i-s-probadesyat-комната-e': IISProbadesyatКомнатаEForm,
    'i-i-s-probadesyat-регистр-входа-e': IISProbadesyatРегистрВходаEForm,
    'i-i-s-probadesyat-сотрудник-e': IISProbadesyatСотрудникEForm
  },

});

export default translations;
