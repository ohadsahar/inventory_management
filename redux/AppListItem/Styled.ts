import styled from 'styled-components';

interface ActiveTab {
  active: boolean;
}
export const AppListItemWrapper = styled.div<ActiveTab>`
  display: flex;
  align-items: center;
  grid-column-gap: 1vw;
  padding: 16px;
  background-color: ${(props: ActiveTab | any) => (props.active ? props.theme.colors.layout : 'transparent')};
  cursor: pointer;
  border-radius: 0px 80px 80px 0px;
  transition: 0.2s ease-in-out;
`;

export const ItemIconWrapper = styled.div<ActiveTab>`
  color: ${(props: ActiveTab) => (props.active ? 'black' : 'white')};
`;
