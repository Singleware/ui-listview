/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Column properties interface.
 */
export interface Properties {
  /**
   * Column classes.
   */
  class?: string;
  /**
   * Column name.
   */
  name?: string;
  /**
   * Determines whether this column can be sort or not.
   */
  sort?: boolean;
  /**
   * Determines whether this column is disabled or not.
   */
  disabled?: boolean;
  /**
   * Column children.
   */
  children?: {};
}
