import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { GREETING } from "./query";

const StyledContent = styled.section`
  background: lightgray;
`;

const Content = () => {
  const { loading, error, data } = useQuery(GREETING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section>
      <h1>{data.greeting}</h1>
    </section>
  );
};

export default Content;
