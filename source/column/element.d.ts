/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Column element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Column name.
   */
  name: string | undefined;
  /**
   * Determines whether this column can be sort or not.
   */
  sort: boolean;
  /**
   * Determines whether this column is disabled or not.
   */
  disabled: boolean;
  /**
   * Adds the specified value into this column.
   * @param value Value to be added.
   */
  add(value: any): void;
}
