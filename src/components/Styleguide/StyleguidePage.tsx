import React from "react";
import { BiMouse } from "react-icons/bi";
import Button from "../Button";
import Container from "../Layout/Container";
import Section from "../Layout/Section";
import Input from "../Form/Input";
import Label from "../Form/Label";
import PasswordInput from "../Form/PasswordInput";

const PlaygroundPage: React.FC = () => {
  return (
    <Container>
      <Section>
        <h2>Buttons</h2>
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
      </Section>

      <Section>
        <h2>Inputs</h2>
        <div style={{ marginBottom: "1rem" }}>
          <Input />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Label for="pw" value="Password">
            <PasswordInput id="pw" />
          </Label>
        </div>
      </Section>
    </Container>
  );
};

export default PlaygroundPage;
