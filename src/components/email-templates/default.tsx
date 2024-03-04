import * as React from "react";

type Props = {
  firstName: string;
};

const component = ({ firstName }: Props) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default component;
