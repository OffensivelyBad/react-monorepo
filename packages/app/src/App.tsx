import { APP_TITLE, useConfig } from "@flipcards/common";
import * as React from "react";

export function App(): React.ReactElement {
  const [count, setCount] = React.useState(0);
  const configStore = useConfig();
  const { environment, setEnvironment } = configStore;
  const nextEnvironment = environment === "Development" ? "Production" : "Development";

  return (
    <div>
      <h1>Welcome to {APP_TITLE}!</h1>
      <p>
        The button below shows that this page is dynamic!
      </p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>
        This shows how we can use a zustand store across packages
      </p>
      <p>Current environment: {environment}</p>
      <button onClick={() => setEnvironment(nextEnvironment)}>Change Environment</button>
    </div>
  )
}