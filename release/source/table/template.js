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
 * Table template class.
 */
let Template = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Table properties.
     * @param children Table children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Table states.
         */
        this.states = {
            disabled: false
        };
        /**
         * Columns slot.
         */
        this.columnSlot = DOM.create("slot", { name: "column", class: "column" });
        /**
         * Table wrapper.
         */
        this.wrapper = DOM.create("div", { class: "wrapper" }, this.columnSlot);
        /**
         * Table styles.
         */
        this.styles = (DOM.create("style", null, `:host > .wrapper {
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  height: 100%;
}`));
        /**
         * Table skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.wrapper);
        this.bindHandlers();
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * List all columns and perform the callback.
     * @param callback Callback.
     */
    listColumns(callback) {
        Control.listChildrenByProperty(this.columnSlot, 'add', callback);
    }
    /**
     * Header size handler.
     */
    headerSizeHandler() {
        let maxHeight = 0;
        this.listColumns((column) => {
            const titles = column.querySelectorAll(`[slot="title"]`);
            for (const title of titles) {
                maxHeight = Math.max(maxHeight, title.offsetHeight);
            }
        });
        this.skeleton.style.paddingTop = `${maxHeight}px`;
    }
    /**
     * Bind all element handlers.
     */
    bindHandlers() {
        window.addEventListener('load', this.headerSizeHandler.bind(this));
        window.addEventListener('resize', this.headerSizeHandler.bind(this));
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        this.bindComponentProperties(this.skeleton, ['disabled', 'addRow']);
    }
    /**
     * Assign all elements properties.
     */
    assignProperties() {
        this.assignComponentProperties(this.properties, ['disabled']);
    }
    /**
     * Get disabled state.
     */
    get disabled() {
        return this.states.disabled;
    }
    /**
     * Set disabled state.
     */
    set disabled(state) {
        this.states.disabled = state;
        Control.setChildrenProperty(this.columnSlot, 'disabled', state);
    }
    /**
     * Table element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Adds a new row into this table.
     * @param data Row data.
     */
    addRow(data) {
        this.listColumns((column) => {
            if (column.name in data) {
                column.add(data[column.name]);
            }
        });
    }
};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "columnSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "wrapper", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "listColumns", null);
__decorate([
    Class.Private()
], Template.prototype, "headerSizeHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "disabled", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "addRow", null);
Template = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
