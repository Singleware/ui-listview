/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Table properties interface.
 */
export interface Properties {
  /**
   * Table classes.
   */
  class?: string;
  /**
   * Table slot.
   */
  slot?: string;
  /**
   * Determines whether this table is disabled or not.
   */
  disabled?: boolean;
  /**
   * Table column children.
   */
  children?: {};
}
