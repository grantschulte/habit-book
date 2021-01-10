import React from "react";
import { BiMouse } from "react-icons/bi";
import Button from "./Button";
import Container from "./Container";

const PlaygroundPage: React.FC = () => {
  return (
    <Container>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="sm">Click Me</Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="md">Click Me</Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="lg">Click Me</Button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Button size="sm" buttonType="secondary" as="a" href="/">
          Click Me
        </Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="md" buttonType="secondary">
          Click Me
        </Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="lg" buttonType="secondary">
          Click Me
        </Button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Button size="sm" buttonType="tertiary" icon={BiMouse}>
          Click Me
        </Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="md" buttonType="tertiary" icon={BiMouse}>
          Click Me
        </Button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button size="lg" buttonType="tertiary" icon={BiMouse}>
          Click Me
        </Button>
      </div>
    </Container>
  );
};

export default PlaygroundPage;
