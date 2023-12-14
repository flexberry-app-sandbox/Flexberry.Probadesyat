import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadesyat-вход-сотрудника', 'Unit | Serializer | i-i-s-probadesyat-вход-сотрудника', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probadesyat-вход-сотрудника',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probadesyat-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
