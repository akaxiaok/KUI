import React from 'react';
import './style';
import { Button, Icon, MenuButton } from 'Components';

function App(props) {
  return (
    <div style={{ fontSize: '14px' }} >
      <Button onClick={() => {
        alert(1)
      }} text="test button" />
      <Button className="" disabled={true} size="large" text="test button" />
      <Button size="middle" text="test button" />
      <Button size="small" className="k-test red" text="test button" />
      <Button />
      <Button text="wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww" />
      <Button leftIcon="Camera" text="icons" rightIcon="Arrow-right" />
      <Button text="wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww" />
      <Icon name="CAmera" className="k-test" style={{ color: 'red', backgroundColor: '#09f' }} />
      <Icon customIcon="k-test-icon" className="" />
      <MenuButton />
      <MenuButton text="菜单按钮"/>
    </div >
  )
}

export default App;