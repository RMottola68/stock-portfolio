import { useState, useEffect} from 'react';

function Count() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div>
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default Count;
