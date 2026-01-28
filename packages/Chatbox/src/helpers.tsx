/**
 * Helper function: Extract data from an object based on a string path.
 * Supports array traversal, e.g., "ws[].cw[0].w"
 * * @param obj - The source object to extract data from
 * @param path - The string path (e.g., 'user.profile.name', 'items[].text', 'a.0.b', or 'a[0].b')
 * @returns The extracted value as a string, or an empty string if not found
 */
/*
@Usage:

const data1 = {
    user: {
        profile: {
            name: "John Doe"
        }
    }
};


console.log(getValueByPath(data1, "user.profile.name")); // Returns: "John Doe"

const data2 = {
    results: [
        { id: 101, title: "First" },
        { id: 102, title: "Second" }
    ]
};

console.log(getValueByPath(data2, "results[1].title")); // Returns: "Second"
console.log(getValueByPath(data2, "results.0.title")); // First
*/
const getValueByPath = (obj: any, path: string): string => {
    if (!obj || !path) return '';
    
    // Direct access if path contains no special characters (no dot notation or array brackets)
    if (!path.includes('[') && !path.includes('.')) {
        return obj[path] !== undefined ? String(obj[path]) : '';
    }

    const parts = path.split('.');
    let current: any = obj;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        
        // Case A: Handle array mapping mode, e.g., "ws[]"
        if (part.endsWith('[]')) {
            const key = part.slice(0, -2);
            const arr = current[key];
            if (!Array.isArray(arr)) return '';
            
            // Recursively get the remaining path for each element in the array and join the results
            const remainingPath = parts.slice(i + 1).join('.');
            return arr.map(item => getValueByPath(item, remainingPath)).join('');
        }

        // Case B: Handle standard properties or indexed properties, e.g., "cw[0]"
        const match = part.match(/^(\w+)(?:\[(\d+)\])?$/);
        if (match) {
            const [, key, index] = match;
            current = current[key];
            if (index !== undefined && Array.isArray(current)) {
                current = current[parseInt(index)];
            }
        } else {
            return '';
        }

        if (current === undefined || current === null) return '';
    }

    return String(current);
};


export {
    getValueByPath
};