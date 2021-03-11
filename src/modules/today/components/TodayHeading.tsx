import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "dayjs";
import Heading from "modules/common/Heading";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const RefreshIcon = styled(BiRefresh).attrs({
  size: "2rem",
})`
  margin-left: 0.5rem;
  transition: transform 200ms ease;
  color: ${(props) => props.theme.color.secondary};

  &:hover {
    transform: rotate(180deg);
  }
`;

export const TODAY_DATE_FORMAT = "dddd, MMMM D";

interface TodayHeadingProps {
  showRefresh?: boolean;
}

const TodayHeading: React.FC<TodayHeadingProps> = ({ showRefresh }) => {
  const headline = dayjs().format(TODAY_DATE_FORMAT);
  const queryClient = useQueryClient();
  const token = useSelector((state: RootState) => state.app.token);
  const date = dayjs().format(REQUEST_DATE_FORMAT);
  const handleRefresh = () => {
    queryClient.invalidateQueries(["habitEvents", date, token]);
  };

  return (
    <HeadingContainer>
      <Heading as="h1" styleAs="h2" noMargin>
        {headline}
      </Heading>
      {showRefresh && (
        <RefreshIcon
          onClick={handleRefresh}
          data-testid="today-heading-refresh"
        />
      )}
    </HeadingContainer>
  );
};

export default TodayHeading;
