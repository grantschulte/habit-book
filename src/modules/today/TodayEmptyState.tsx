import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import routes from "config/routes";
import Button, { StyledButton } from "modules/common/Button";
import dayjs from "modules/common/Date";
import React from "react";
import { BiPlus, BiRefresh } from "react-icons/bi";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";
import content from "config/content.json";

const EmptyStateContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.backgroundAlt};
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const ButtonContainer = styled.div`
  display: flex;

  ${StyledButton} {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    ${StyledButton} {
      margin-bottom: 1rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

interface TodayEmptyStateProps {
  showRefresh?: boolean;
}

const TodayEmptyState: React.FC<TodayEmptyStateProps> = ({ showRefresh }) => {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const token = useSelector((state: RootState) => state.app.token);
  const date = dayjs().format(REQUEST_DATE_FORMAT);
  const reload = () => {
    queryClient.invalidateQueries(["habitEvents", date, token]);
  };

  return (
    <EmptyStateContainer>
      <div style={{ marginBottom: theme.spacing[4] }}>
        {content.todayNoHabits}
      </div>
      <ButtonContainer>
        <Button
          size="md"
          as="link"
          href={routes.habits.path}
          style={{ marginRight: theme.spacing[4] }}
        >
          <BiPlus style={{ marginRight: theme.spacing[2] }} size="1.25rem" />
          {content.addHabits}
        </Button>
        {showRefresh && (
          <Button size="md" onClick={reload}>
            <BiRefresh
              style={{ marginRight: theme.spacing[2] }}
              size="1.25rem"
            />
            {content.todayUseExisting}
          </Button>
        )}
      </ButtonContainer>
    </EmptyStateContainer>
  );
};

export default TodayEmptyState;
