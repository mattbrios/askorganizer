import styled from "styled-components";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CustomMoon = styled(Brightness3Icon)`
  color: ${ props => props.theme.colors.text} !important;
`;

export const CustomSun = styled(Brightness7Icon)`
  color: ${ props => props.theme.colors.text} !important;
`;