import { Serializer as КартаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probadesyat-карта';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КартаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
