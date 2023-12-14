import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probadesyat-гость-l');
  this.route('i-i-s-probadesyat-гость-e',
  { path: 'i-i-s-probadesyat-гость-e/:id' });
  this.route('i-i-s-probadesyat-гость-e.new',
  { path: 'i-i-s-probadesyat-гость-e/new' });
  this.route('i-i-s-probadesyat-должности-l');
  this.route('i-i-s-probadesyat-должности-e',
  { path: 'i-i-s-probadesyat-должности-e/:id' });
  this.route('i-i-s-probadesyat-должности-e.new',
  { path: 'i-i-s-probadesyat-должности-e/new' });
  this.route('i-i-s-probadesyat-карта-l');
  this.route('i-i-s-probadesyat-карта-e',
  { path: 'i-i-s-probadesyat-карта-e/:id' });
  this.route('i-i-s-probadesyat-карта-e.new',
  { path: 'i-i-s-probadesyat-карта-e/new' });
  this.route('i-i-s-probadesyat-комната-l');
  this.route('i-i-s-probadesyat-комната-e',
  { path: 'i-i-s-probadesyat-комната-e/:id' });
  this.route('i-i-s-probadesyat-комната-e.new',
  { path: 'i-i-s-probadesyat-комната-e/new' });
  this.route('i-i-s-probadesyat-регистр-входа-l');
  this.route('i-i-s-probadesyat-регистр-входа-e',
  { path: 'i-i-s-probadesyat-регистр-входа-e/:id' });
  this.route('i-i-s-probadesyat-регистр-входа-e.new',
  { path: 'i-i-s-probadesyat-регистр-входа-e/new' });
  this.route('i-i-s-probadesyat-сотрудник-l');
  this.route('i-i-s-probadesyat-сотрудник-e',
  { path: 'i-i-s-probadesyat-сотрудник-e/:id' });
  this.route('i-i-s-probadesyat-сотрудник-e.new',
  { path: 'i-i-s-probadesyat-сотрудник-e/new' });
});

export default Router;
