This component demonstrates the correct usage of `useEffect`'s cleanup function with asynchronous operations, resolving potential memory leaks. When the component unmounts, the timeout is cleared properly.

```javascript
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  let timeoutId;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return <div>Count: {count}</div>;
}
export default MyComponent;
```