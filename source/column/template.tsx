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
 * Column template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Column states.
   */
  @Class.Private()
  private states = {
    sort: false,
    disabled: false
  } as States;

  /**
   * Filter slot element.
   */
  @Class.Private()
  private filterSlot = <slot name="filter" class="filter" /> as HTMLSlotElement;

  /**
   * Header element.
   */
  @Class.Private()
  private header = (
    <div class="header">
      <div class="caption" onClick={this.clickHandler.bind(this)}>
        <slot name="title" class="title" />
        <slot name="sorter" class="sorter" />
      </div>
      {this.filterSlot}
    </div>
  ) as HTMLDivElement;

  /**
   * Content element.
   */
  @Class.Private()
  private content = (
    <div class="content">
      <slot name="data" class="data" />
    </div>
  ) as HTMLDivElement;

  /**
   * Column styles.
   */
  @Class.Private()
  private styles = (
    <style>
      {`:host,
:host > .content,
:host > .content > .data {
  display: flex;
  flex-direction: column;
}
:host > .header {
  display: flex;
  flex-direction: row;
  position: absolute;
  transform: translateY(-100%);
}
:host > .header > .caption > .title::slotted(*),
:host > .content > .data::slotted(*) {
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Column skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div slot="column" class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Column click event handler.
   * @param event Event instance.
   */
  @Class.Private()
  private clickHandler(event: Event): void {
    if (this.disabled || !this.sort) {
      event.preventDefault();
    }
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    this.bindComponentProperties(this.skeleton, ['name', 'sort', 'disabled', 'add']);
  }

  /**
   * Assign all elements properties.
   */
  @Class.Private()
  private assignProperties(): void {
    this.assignComponentProperties(this.properties, ['name', 'sort', 'disabled']);
  }

  /**
   * Default constructor.
   * @param properties Column properties.
   * @param children Column children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.header, this.content);
    this.bindProperties();
    this.assignProperties();
  }

  /**
   * Gets the column name.
   */
  @Class.Public()
  public get name(): string | undefined {
    return this.states.name;
  }

  /**
   * Sets the column name.
   */
  public set name(name: string | undefined) {
    this.states.name = name;
  }

  /**
   * Gets the sort state.
   */
  @Class.Public()
  public get sort(): boolean {
    return this.states.sort;
  }

  /**
   * Sets the sort state.
   */
  public set sort(state: boolean) {
    this.states.sort = state;
  }

  /**
   * Gets the disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.states.disabled;
  }

  /**
   * Sets the disabled state.
   */
  public set disabled(state: boolean) {
    this.states.disabled = state;
    Control.setChildrenProperty(this.filterSlot, 'disabled', state);
  }

  /**
   * Column element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Adds the specified value into this column.
   * @param value Value to be added.
   */
  @Class.Public()
  public add(value: any): void {
    DOM.append(this.skeleton, <div slot="data">{value}</div>);
  }
}
