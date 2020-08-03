import { ExcelComponent } from '../../core/ExcelComponent';

export default class Table extends ExcelComponent {
  toHTML() {
    return '<h1>This is Table</h1>';
  }
}
