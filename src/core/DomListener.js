export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`Error! No $root provided in the Dom Listener `);
    }
    this.$root = $root;
  }
}
