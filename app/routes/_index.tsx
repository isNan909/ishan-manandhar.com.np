import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ishan Manandhar" },
    { name: "description", content: "Welcome to ishan-manandhar.com.np" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to my website.</h1>
      <span>This  site is under construction(staging)!</span>
    </div>
  );
}
