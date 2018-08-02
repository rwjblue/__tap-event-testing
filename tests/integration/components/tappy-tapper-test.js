import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, tap } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tappy-tapper', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{tappy-tapper}}`);

    assert.dom('p').hasText('No tappy tapper!');

    await tap('p');

    assert.dom('p').hasText('Tapped!!');
  });
});
