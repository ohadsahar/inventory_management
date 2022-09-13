import styled from 'styled-components';

interface RowActionProps {
  disabled: boolean;
}
export const TableRowActionsWrapper = styled.div<RowActionProps>`
  display: flex;
  grid-column-gap: 1vw;
  pointer-events: ${(props: RowActionProps) => (props.disabled ? 'none' : '')};
`;
