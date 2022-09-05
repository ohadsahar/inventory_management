import styled from 'styled-components';

export const LayoutComponentsWrapper = styled.div`
  padding: 16px;
  background-color: ${(props: any) => props.theme.colors.layout};
  overflow-y: scroll;
  width: calc(100vw - 100px);
  height: calc(100vh - 64px);
`;
