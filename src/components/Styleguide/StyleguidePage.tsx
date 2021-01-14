import React from "react";
import { BiCloud, BiMouse } from "react-icons/bi";
import Button from "../Button";
import Container from "../Layout/Container";
import Section from "../Layout/Section";
import Input from "../Form/Input";
import Label from "../Form/Label";
import PasswordInput from "../Form/PasswordInput";
import Heading from "../Typography/Heading";
import StyleguideHeading from "./StyleguideHeading";
import { ErrorAlert, InfoAlert, SuccessAlert, WarningAlert } from "../Alert";
import StyledLink from "../StyledLink";
import MenuLink from "../Menu/MenuLink";

const PlaygroundPage: React.FC = () => {
  return (
    <Container>
      <Section>
        <StyleguideHeading as="h2">Buttons</StyleguideHeading>

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
        <StyleguideHeading as="h2">Inputs</StyleguideHeading>
        <div style={{ marginBottom: "1rem" }}>
          <Input placeholder="Enter your name" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Label for="e" value="Email">
            <Input id="e" type="email" />
          </Label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Label for="pw" value="Password">
            <PasswordInput id="pw" showVisibilityToggle />
          </Label>
        </div>
      </Section>

      <Section>
        <StyleguideHeading as="h2">Typography</StyleguideHeading>

        <Heading as="h1" styleAs="h1">
          Heading 1
        </Heading>
        <Heading as="h2">Heading 2</Heading>
        <Heading as="h3">Heading 3</Heading>
        <Heading as="h4">Heading 4</Heading>
        <Heading as="h5">Heading 5</Heading>
        <Heading as="h6">Heading 6</Heading>
        <p>This is a regular paragraph.</p>
      </Section>

      <Section>
        <StyleguideHeading as="h2">Alert</StyleguideHeading>
        <div>
          <SuccessAlert>This is a success alert</SuccessAlert>
        </div>
        <div>
          <WarningAlert>This is a warning alert</WarningAlert>
        </div>
        <div>
          <ErrorAlert>This is an error alert</ErrorAlert>
        </div>
        <div>
          <InfoAlert>This is an info alert</InfoAlert>
        </div>
      </Section>

      <Section>
        <StyleguideHeading as="h2">Links</StyleguideHeading>
        <StyledLink to="/">Link</StyledLink>
        <MenuLink to="/today">Menu Link</MenuLink>
        <MenuLink to="/today" icon={BiCloud}>
          Menu Link w/Icon
        </MenuLink>
      </Section>
    </Container>
  );
};

export default PlaygroundPage;
