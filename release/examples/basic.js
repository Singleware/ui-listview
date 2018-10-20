"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic listview template.
 */
const Listview = require("../source");
const DOM = require("@singleware/jsx");
const listview = (DOM.create(Listview.Table.Template, null,
    DOM.create(Listview.Column.Template, { name: "a" },
        DOM.create("b", { slot: "title" }, "Column A")),
    DOM.create(Listview.Column.Template, { name: "b" },
        DOM.create("b", { slot: "title" }, "Column B"))));
listview.addRow({
    a: 'Value A',
    b: 'Value B'
});
