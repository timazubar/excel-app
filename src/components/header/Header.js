import { ExcelComponent } from '../../core/ExcelComponent';

export default class Header extends ExcelComponent {
  toHTML() {
    return '<h1>This is Header</h1>';
  }
}
