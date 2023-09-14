export function isValid(s: string) {
    const stack: string[] = [];
    const map = new Map<string, string>();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    for(const char of s) {
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if(stack.length === 0 || stack.pop() !== map.get(char)) return false;
        }
    }

    return stack.length === 0;
}

console.log(isValid("(()"))