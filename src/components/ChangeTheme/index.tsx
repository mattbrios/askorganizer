import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { ThemeContext } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

import { SwitchContainer, CustomMoon, CustomSun } from './styles';

export const ChangeTheme = () => {
  const { changeTheme } = useAuth();
  
  const { title } = useContext(ThemeContext);
  
  return (
    <SwitchContainer>
      {title === 'dark' ? (
        <CustomMoon />
      ) : (
        <CustomSun />
      )}
      <Switch
        checked={title === 'dark'}
        onChange={changeTheme}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </SwitchContainer>
  )
}
