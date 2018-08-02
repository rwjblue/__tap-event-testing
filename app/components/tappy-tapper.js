import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import Component from '@ember/component';

export default Component.extend(RecognizerMixin, {
  recognizers: 'tap',

  tap() {
    this.set('hasTapped', true);
  }
});
