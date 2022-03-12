# Call Stack

Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.
Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”.

# Closures

local bindings are re-created every time a function is called

What happens to local bindings when the function call that created them is no longer active?

```
function wrapValue(n) {
  let local = n;
  return () => local;
}
```

This is an example of a closure in this function scope.

```
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5))
// 10
```

When called, the function body sees the environment in which it was created, not the environment in which it is called.

In the example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.

# Functions and Side Effects

A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else).
