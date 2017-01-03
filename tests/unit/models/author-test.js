import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('author', 'Unit | Model | author', {
  // Specify the other units that are required for this test.
  needs: ['model:book']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it has an attribute: name', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});

test('book relationship', function(assert) {
  var model = this.store().modelFor('author');
  var relationship = Ember.get(model, 'relationshipsByName').get('books');

  assert.equal(relationship.key, 'books');
  assert.equal(relationship.kind, 'hasMany');
});
