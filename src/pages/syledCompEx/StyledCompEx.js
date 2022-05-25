import React from "react";
import { data } from "../../utils/data";
import { MotionComponent, NameTag, nameTagVariant } from "../../components";
import styled from "styled-components";

const StyledCompEx = () => {
  return (
    <Container>
      <div>
        {data.map((name, index) => (
          <NameTag index={index} key={name.name} name={name.name} />
        ))}
      </div>
      <div>
        {data.map((name, index) => (
          <MotionComponent
            custom={index}
            index={index}
            key={name.name}
            variants={nameTagVariant}
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>
    </Container>
  );
};

export default StyledCompEx;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
