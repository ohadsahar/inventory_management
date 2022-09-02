import styled from 'styled-components';

export const LayoutComponentsWrapper = styled.div`
  padding: 16px;
  height: calc(100vh - 60px);
  background-color: ${(props: any) => props.theme.colors.layout};
`;
