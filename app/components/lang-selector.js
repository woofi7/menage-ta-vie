import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';


export default class LangSelectorComponent extends Component {
  @service('intl') intl;

  locales = this.intl.get('locales');
  @tracked
  selected = this.intl.get("locale.firstObject");

  @action
  changeLocale(locale) {
    this.intl.setLocale(locale);
    this.selected = locale;
  }
}
