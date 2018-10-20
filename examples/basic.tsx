/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic listview template.
 */
import * as Listview from '../source';
import * as DOM from '@singleware/jsx';

const listview = (
  <Listview.Table.Template>
    <Listview.Column.Template name="a">
      <b slot="title">Column A</b>
    </Listview.Column.Template>
    <Listview.Column.Template name="b">
      <b slot="title">Column B</b>
    </Listview.Column.Template>
  </Listview.Table.Template>
) as Listview.Table.Element;

listview.addRow({
  a: 'Value A',
  b: 'Value B'
});
