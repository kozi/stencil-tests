import { Component, Host, h, Prop } from '@stencil/core';
import SortableJS from 'sortablejs';

export interface SortableEntry { id: string;  label: string; }

@Component({
  tag: 'd-sortable',
  styleUrl: 'sortable.css',
  shadow: true
})
export class Sortable {
  private container: HTMLUListElement;

  @Prop({ mutable: true }) entries: SortableEntry[];

  componentDidLoad() {
    SortableJS.create(this.container, {
      store: {
        get: () => [],
        set: sortable => {
          const idArray = sortable.toArray();
          const order = {};
          idArray.forEach(function (a, i) { order[a] = i; });
          const newArray = [...this.entries];
          newArray.sort((a, b) => order[a.id] - order[b.id]);

          this.entries = newArray;
        }
      }
    });
  }

  componentShouldUpdate(newValue: any, _oldValue: any, propName: string) {
    console.log("componentShouldUpdate", propName, newValue.map(e=> e.id));
  }

  // componentDidUpdate() { }

  render() {
    return (
      <Host>
        <ul ref={(el) => this.container = el}>
          {Array.isArray(this.entries) && this.entries.map((entry) =>
            <li data-id={entry.id}>{entry.label}</li>
          )}
        </ul>
      </Host>
    );
  }

}
