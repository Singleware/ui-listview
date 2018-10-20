/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Column states interface.
 */
export interface States {
  /**
   * Column name.
   */
  name: string | undefined;
  /**
   * Sort state.
   */
  sort: boolean;
  /**
   * Disabled state.
   */
  disabled: boolean;
}
