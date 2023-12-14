import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probadesyat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probadesyat',
          title: 'Probadesyat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
