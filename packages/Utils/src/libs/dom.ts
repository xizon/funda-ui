/**
 * Dom Utilities
 * @param {HTMLElement} el      - Element
 * @param  {?String} filter      - A filter string
 * @returns HtmlElementCollection
 */
function matches(el: HTMLElement, filter: string | null): boolean {
    if (el && el.nodeType === 1) {
        if (filter) {
            return el.matches(filter);
        }
        return true;
    }
    return false;
}

// the next siblings
function getNextSiblings(el: HTMLElement, filter: string = ''): HTMLElement[] {
    const sibs: HTMLElement[] = [];
    while (el = el.nextSibling as HTMLElement) {
        if (matches(el, filter)) {
            sibs.push(el);
        }
    }
    return sibs;
}

// previous siblings
function getPreviousSiblings(el: HTMLElement, filter: string = ''): HTMLElement[] {
    const sibs: HTMLElement[] = [];
    while (el = el.previousSibling as HTMLElement) {
        if (matches(el, filter)) {
            sibs.push(el);
        }
    }
    return sibs;
}

// parent and get all the siblings
function getAllSiblings(el: HTMLElement, filter: string = ''): HTMLElement[] {
    const sibs: HTMLElement[] = [];
    el = el.parentNode!.firstChild as HTMLElement;
    while (el = el.nextSibling as HTMLElement) {
        if (matches(el, filter)) {
            sibs.push(el);
        }
    }
    return sibs;
}

// all parent nodes
function getParents(el: HTMLElement, filter: string = ''): HTMLElement[] {
    const parents: HTMLElement[] = [];
    while (el = el.parentNode as HTMLElement) {
        if (matches(el, filter)) {
            parents.push(el);
        }
    }
    return parents;
}

// all child nodes
function getChildren(el: HTMLElement, filter: string = '', all: any[] = []): any[] {
    all.push(...el.childNodes as any);
    for (const child of el.childNodes as any) {
        getChildren(child as HTMLElement, filter, all);
    }

    const res = all.filter((item) => matches(item as HTMLElement, filter));
    return res;
}

function isRootElement(element: HTMLElement): boolean {
    return element.matches('html,body');
}

function getDocument(node?: Node): Document {
    if (typeof node === 'undefined') {
        return document;
    } else {
        return node.ownerDocument!;
    }
}

function isNode(value: any): value is Node {
    return value instanceof Node;
}

function isElement(value: any): value is Element {
    return value instanceof Element;
}

function isHTMLElement(value: any): value is HTMLElement {
    return value instanceof HTMLElement;
}

function isShadowRoot(value: any): value is ShadowRoot {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
        return false;
    }

    return value instanceof ShadowRoot;
}

/* console.log(nodeContains(document.body, document.getElementById('obj'))) */
function nodeContains(parent: Node, child: Node): boolean {
    if (!parent || !child) {
        return false;
    }

    const rootNode = child.getRootNode?.();

    // First, attempt with faster native method
    if (parent.contains(child)) {
        return true;
    }

    // then fallback to custom implementation with Shadow DOM support
    if (rootNode && isShadowRoot(rootNode)) {
        let next = child;
        while (next) {
            if (parent === next) {
                return true;
            }
            // @ts-ignore
            next = next.parentNode || next.host;
        }
    }

    // Give up, the result is false
    return false;
}

export {
    getNextSiblings,
    getPreviousSiblings,
    getAllSiblings,
    getParents,
    getChildren,
    isRootElement,
    getDocument,
    isNode,
    isElement,
    isHTMLElement,
    isShadowRoot,
    nodeContains
}

