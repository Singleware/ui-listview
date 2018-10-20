"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Column template class.
 */
let Template = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Column properties.
     * @param children Column children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Column states.
         */
        this.states = {
            sort: false,
            disabled: false
        };
        /**
         * Filter slot element.
         */
        this.filterSlot = DOM.create("slot", { name: "filter", class: "filter" });
        /**
         * Header element.
         */
        this.header = (DOM.create("div", { class: "header" },
            DOM.create("div", { class: "caption", onClick: this.clickHandler.bind(this) },
                DOM.create("slot", { name: "title", class: "title" }),
                DOM.create("slot", { name: "sorter", class: "sorter" })),
            this.filterSlot));
        /**
         * Content element.
         */
        this.content = (DOM.create("div", { class: "content" },
            DOM.create("slot", { name: "data", class: "data" })));
        /**
         * Column styles.
         */
        this.styles = (DOM.create("style", null, `:host,
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
}`));
        /**
         * Column skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: "column", class: this.properties.class }, this.children));
        DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.header, this.content);
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Column click event handler.
     * @param event Event instance.
     */
    clickHandler(event) {
        if (this.disabled || !this.sort) {
            event.preventDefault();
        }
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        this.bindComponentProperties(this.skeleton, ['name', 'sort', 'disabled', 'add']);
    }
    /**
     * Assign all elements properties.
     */
    assignProperties() {
        this.assignComponentProperties(this.properties, ['name', 'sort', 'disabled']);
    }
    /**
     * Gets the column name.
     */
    get name() {
        return this.states.name;
    }
    /**
     * Sets the column name.
     */
    set name(name) {
        this.states.name = name;
    }
    /**
     * Gets the sort state.
     */
    get sort() {
        return this.states.sort;
    }
    /**
     * Sets the sort state.
     */
    set sort(state) {
        this.states.sort = state;
    }
    /**
     * Gets the disabled state.
     */
    get disabled() {
        return this.states.disabled;
    }
    /**
     * Sets the disabled state.
     */
    set disabled(state) {
        this.states.disabled = state;
        Control.setChildrenProperty(this.filterSlot, 'disabled', state);
    }
    /**
     * Column element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Adds the specified value into this column.
     * @param value Value to be added.
     */
    add(value) {
        DOM.append(this.skeleton, DOM.create("div", { slot: "data" }, value));
    }
};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "filterSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "header", void 0);
__decorate([
    Class.Private()
], Template.prototype, "content", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "clickHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "name", null);
__decorate([
    Class.Public()
], Template.prototype, "sort", null);
__decorate([
    Class.Public()
], Template.prototype, "disabled", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "add", null);
Template = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
