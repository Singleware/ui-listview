import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Table template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Table states.
     */
    private states;
    /**
     * Columns slot.
     */
    private columnSlot;
    /**
     * Table wrapper.
     */
    private wrapper;
    /**
     * Table styles.
     */
    private styles;
    /**
     * Table skeleton.
     */
    private skeleton;
    /**
     * List all columns and perform the callback.
     * @param callback Callback.
     */
    private listColumns;
    /**
     * Header size handler.
     */
    private headerSizeHandler;
    /**
     * Bind all element handlers.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all elements properties.
     */
    private assignProperties;
    /**
     * Default constructor.
     * @param properties Table properties.
     * @param children Table children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Get disabled state.
     */
    /**
    * Set disabled state.
    */
    disabled: boolean;
    /**
     * Table element.
     */
    readonly element: Element;
    /**
     * Adds a new row into this table.
     * @param data Row data.
     */
    addRow(data: any): void;
}
