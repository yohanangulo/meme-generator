import { useEffect, useState, lazy, Suspense } from "react";

function Info() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      {data.map((el) => (
        <div className="mt-8">
          <h1 className="text-xl">{el.name}</h1>
          <p>{el.username}</p>
        </div>
      ))}
    </>
  );
}

export function Load() {
  return <p className="text-2xl">Loading data...</p>;
}

export default Info;
