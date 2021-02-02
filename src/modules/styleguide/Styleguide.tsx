import React from "react";
import { BiCloud, BiMouse } from "modules/common/Icons";
import Button from "modules/common/Button";
import { Row, Col } from "modules/common/Grid";
import Page from "modules/common/Page";
import Input from "modules/common/Form/Input";
import Label from "modules/common/Form/Label";
import InputPassword from "modules/common/PasswordInput/PasswordInput";
import Heading from "modules/common/Heading";
import {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from "../common/Alert";
import StyledLink from "../common/StyledLink";
import MenuLink from "../common/SidebarMenu/SidebarMenuLink";
import styled from "styled-components";

const StyledRow = styled(Row)`
  margin-top: 2rem;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 2rem;
  }
`;

const StyleguideHeading = styled(Heading)`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.black};
`;

const Styleguide: React.FC = () => {
  return (
    <Page>
      <StyledRow center="xs">
        <Col xs md={6}>
          <Heading as="h1">Styleguide</Heading>
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
        </Col>
      </StyledRow>

      <StyledRow center="xs">
        <Col xs md={6}>
          <StyleguideHeading as="h2">Inputs</StyleguideHeading>
          <div style={{ marginBottom: "1rem" }}>
            <Input placeholder="Enter your name" />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Label htmlFor="e" value="Email">
              <Input id="e" type="email" />
            </Label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Label htmlFor="pw" value="Password">
              <InputPassword id="pw" showVisibilityToggle />
            </Label>
          </div>
        </Col>
      </StyledRow>

      <StyledRow center="xs">
        <Col xs md={6}>
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
        </Col>
      </StyledRow>

      <StyledRow center="xs">
        <Col xs md={6}>
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
        </Col>
      </StyledRow>

      <StyledRow center="xs">
        <Col xs md={6}>
          <StyleguideHeading as="h2">Links</StyleguideHeading>
          <StyledLink to="/">Link</StyledLink>
          <MenuLink to="/today">Menu Link</MenuLink>
          <MenuLink to="/today" icon={BiCloud}>
            Menu Link w/Icon
          </MenuLink>
        </Col>
      </StyledRow>
    </Page>
  );
};

export default Styleguide;
