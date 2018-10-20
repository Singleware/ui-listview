/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';
import { States } from './states';

/**
 * Table template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Table states.
   */
  @Class.Private()
  private states = {
    disabled: false
  } as States;

  /**
   * Columns slot.
   */
  @Class.Private()
  private columnSlot = <slot name="column" class="column" /> as HTMLSlotElement;

  /**
   * Table wrapper.
   */
  @Class.Private()
  private wrapper = <div class="wrapper">{this.columnSlot}</div> as HTMLDivElement;

  /**
   * Table styles.
   */
  @Class.Private()
  private styles = (
    <style>
      {`:host > .wrapper {
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  height: 100%;
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Table skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * List all columns and perform the callback.
   * @param callback Callback.
   */
  @Class.Private()
  private listColumns(callback: Class.Callable): void {
    Control.listChildrenByProperty(this.columnSlot, 'add', callback);
  }

  /**
   * Header size handler.
   */
  @Class.Private()
  private headerSizeHandler(): void {
    let maxHeight = 0;
    this.listColumns((column: HTMLElement) => {
      const titles = column.querySelectorAll(`[slot="title"]`) as NodeListOf<HTMLElement>;
      for (const title of titles) {
        maxHeight = Math.max(maxHeight, title.offsetHeight);
      }
    });
    this.skeleton.style.paddingTop = `${maxHeight}px`;
  }

  /**
   * Bind all element handlers.
   */
  @Class.Private()
  private bindHandlers(): void {
    window.addEventListener('load', this.headerSizeHandler.bind(this));
    window.addEventListener('resize', this.headerSizeHandler.bind(this));
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    this.bindComponentProperties(this.skeleton, ['disabled', 'addRow']);
  }

  /**
   * Assign all elements properties.
   */
  @Class.Private()
  private assignProperties(): void {
    this.assignComponentProperties(this.properties, ['disabled']);
  }

  /**
   * Default constructor.
   * @param properties Table properties.
   * @param children Table children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    DOM.append((this.skeleton as HTMLDivElement).attachShadow({ mode: 'closed' }), this.styles, this.wrapper);
    this.bindHandlers();
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Get disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.states.disabled;
  }

  /**
   * Set disabled state.
   */
  public set disabled(state: boolean) {
    this.states.disabled = state;
    Control.setChildrenProperty(this.columnSlot, 'disabled', state);
  }

  /**
   * Table element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Adds a new row into this table.
   * @param data Row data.
   */
  @Class.Public()
  public addRow(data: any): void {
    this.listColumns((column: any) => {
      if (column.name in data) {
        column.add(data[column.name]);
      }
    });
  }
}
