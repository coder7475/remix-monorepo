import type { MetaFunction } from "@remix-run/node";
import { Button } from "shared-ui";

export default function Index() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "My Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
