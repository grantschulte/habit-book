import { useAuth0 } from "@auth0/auth0-react";
import { resetAppError } from "app/App.slice";
import { RootState } from "app/rootReducer";
import content from "config/content.json";
import Button from "modules/common/Button";
import Heading from "modules/common/Heading";
import React from "react";
import { FallbackProps } from "react-error-boundary";
import { BiError, BiExit, BiRefresh } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ResponseError } from "types";

const ErrorContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorBackdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.background};
  opacity: 0.95;
  z-index: 0;
`;

const ErrorMessageModal = styled.div`
  width: 100%;
  max-width: 800px;
  margin: var(--page-padding);
  padding: var(--page-padding);
  border: 2px solid ${(props) => props.theme.color.error};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.color.background};

  p {
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spacing[6]};
    max-width: 50ch;
    text-align: center;
    line-height: 1.5;
  }
`;

const ErrorIcon = styled(BiError).attrs((props) => ({
  color: props.theme.color.error,
  size: "4rem",
}))`
  margin-bottom: 1rem;
`;

const AppErrorShared: React.FC<{ error: string }> = ({ error }) => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();

  const handleRefresh = () => {
    dispatch(resetAppError());
    window.location.reload();
  };

  const handleLogout = () => {
    dispatch(resetAppError());
    logout();
  };

  return (
    <ErrorContainer>
      <ErrorBackdrop />
      <ErrorMessageModal>
        <ErrorIcon />
        <Heading as="h3" style={{ textAlign: "center" }}>
          {content.errorGeneric}
        </Heading>
        {error === ResponseError.Unauthorized ? (
          <>
            <p>{content.unauthorizedMessage}</p>
            <Button onClick={handleLogout}>
              <BiExit size="1.5rem" style={{ marginRight: "0.5rem" }} />
              {content.signOut}
            </Button>
          </>
        ) : (
          <>
            <p>{content.errorGenericMessage}</p>
            <Button onClick={handleRefresh}>
              <BiRefresh size="1.5rem" style={{ marginRight: "0.5rem" }} />
              {content.refresh}
            </Button>
          </>
        )}
      </ErrorMessageModal>
    </ErrorContainer>
  );
};

export const AppError: React.FC = () => {
  const error = useSelector((state: RootState) => state.app.error);
  if (!error) return null;
  return <AppErrorShared error={error.message} />;
};

export const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return <AppErrorShared error={error.message} />;
};
