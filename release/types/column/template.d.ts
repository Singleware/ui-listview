import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Column template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Column states.
     */
    private states;
    /**
     * Filter slot element.
     */
    private filterSlot;
    /**
     * Header element.
     */
    private header;
    /**
     * Content element.
     */
    private content;
    /**
     * Column styles.
     */
    private styles;
    /**
     * Column skeleton.
     */
    private skeleton;
    /**
     * Column click event handler.
     * @param event Event instance.
     */
    private clickHandler;
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
     * @param properties Column properties.
     * @param children Column children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Gets the column name.
     */
    /**
    * Sets the column name.
    */
    name: string | undefined;
    /**
     * Gets the sort state.
     */
    /**
    * Sets the sort state.
    */
    sort: boolean;
    /**
     * Gets the disabled state.
     */
    /**
    * Sets the disabled state.
    */
    disabled: boolean;
    /**
     * Column element.
     */
    readonly element: Element;
    /**
     * Adds the specified value into this column.
     * @param value Value to be added.
     */
    add(value: any): void;
}
