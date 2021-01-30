import React from "react";
import { BiCloud, BiMouse } from "modules/common/Icons";
import Button from "modules/common/Button";
import Container from "modules/common/Container";
import Section from "modules/common/Section";
import Input from "modules/common/Form/Input";
import Label from "modules/common/Form/Label";
import PasswordInput from "modules/common/Form/PasswordInput";
import Heading from "modules/common/Heading";
import StyleguideHeading from "./components/StyleguideHeading";
import {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from "../common/Alert";
import StyledLink from "../common/StyledLink";
import MenuLink from "../common/SidebarMenu/SidebarMenuLink";

const Styleguide: React.FC = () => {
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
          <SuccessAlert title="Great Job" message="This is a success alert" />
        </div>
        <div>
          <WarningAlert
            title="You need to look into this"
            message="This is a warning alert"
          ></WarningAlert>
        </div>
        <div>
          <ErrorAlert
            title="Something went wrong"
            message="This is an error alert"
          ></ErrorAlert>
        </div>
        <div>
          <InfoAlert
            title="We wanted to let you know"
            message="This is an info alert"
          ></InfoAlert>
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

export default Styleguide;
