import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadesyat-гость', 'Unit | Model | i-i-s-probadesyat-гость', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probadesyat-вход-гостя',
    'model:i-i-s-probadesyat-вход-сотрудника',
    'model:i-i-s-probadesyat-гость',
    'model:i-i-s-probadesyat-должности',
    'model:i-i-s-probadesyat-карта',
    'model:i-i-s-probadesyat-комната',
    'model:i-i-s-probadesyat-регистр-входа',
    'model:i-i-s-probadesyat-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
