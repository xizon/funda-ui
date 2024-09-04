/**
 * Convert Tree
 * @param {Array} arr                    - Flat array
 * @param  {?string | ?number} parentId  - Parent id
 * @param  {?string} keyId               - Key value of id.
 * @param  {?string} keyParentId         - Key value of parent id.
 * @returns Array
 */
declare function convertTree(arr: any[], parentId?: string | number, keyId?: string, keyParentId?: string): any[];
/**
 * Flat tree
 * @param {Array} arr                    - Hierarchical array
 * @returns Array
 */
declare function flatTree(arr: any[]): any[];
/**
 * Get all depth
 * @param {Object} node
 * @returns Number
 */
declare function getAllDepth(arr: any[]): number;
/**
* Add depth to each item in the tree
* @param {Array} arr       - Hierarchical array
* @param  {?string} keyId               - Key value of id.
* @param  {?string} keyParentId         - Key value of parent id.
* @param  {?number} depth               - Depth of the item.
* @returns Number
*/
declare function addTreeDepth(arr: any[], keyId?: string, parentItem?: string, depth?: number): any[];
/**
 * Add indent placeholder
 * @param {Array} arr                    - Flat array
 * @param  {?string} placeholder         - String of placeholder
 * @param  {?string} lastPlaceholder     - Last String of placeholder
 * @param  {?string} keyName             - Key value of name.
 * @returns Array
 */
declare function addTreeIndent(arr: any[], placeholder?: string, lastPlaceholder?: string, keyName?: string): void;
export { getAllDepth, convertTree, flatTree, addTreeDepth, addTreeIndent };
