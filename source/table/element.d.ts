/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Table element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Determines whether this table is disabled or not.
   */
  disabled: boolean;
  /**
   * Adds a new row into this table.
   * @param data Row data.
   */
  addRow(data: any): void;
}
