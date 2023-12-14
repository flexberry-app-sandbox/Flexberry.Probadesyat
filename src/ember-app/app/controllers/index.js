import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-probadesyat-карта-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadesyat-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadesyat-карта-l.title'),
            children: null
          }, {
            link: 'i-i-s-probadesyat-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadesyat-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadesyat-комната-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.клиенты.caption'),
            title: i18n.t('forms.application.sitemap.отель.клиенты.title'),
            children: [{
              link: 'i-i-s-probadesyat-гость-l',
              caption: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-probadesyat-гость-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-probadesyat-гость-l.title'),
              icon: 'book',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документы.caption'),
            title: i18n.t('forms.application.sitemap.отель.документы.title'),
            children: [{
              link: 'i-i-s-probadesyat-регистр-входа-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probadesyat-регистр-входа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probadesyat-регистр-входа-l.title'),
              icon: 'address card',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.персонал.caption'),
            title: i18n.t('forms.application.sitemap.отель.персонал.title'),
            children: [{
              link: 'i-i-s-probadesyat-должности-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probadesyat-должности-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probadesyat-должности-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-probadesyat-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probadesyat-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-probadesyat-сотрудник-l.title'),
              icon: 'briefcase',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})