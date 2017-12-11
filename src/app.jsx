import React from 'react';
import './style';
import { Button, Icon, Input, MenuButton } from 'Components';


function logItem(e, item) {
  console.log(item.text, item.value, item.index);
}

function log(e) {
  console.log(e);
}

function App(props) {
  return (
    <div style={{ fontSize: '14px', margin: '10px' }} >
      <div >
        <h3 >Button</h3 >
        <Button onClick={() => {
          alert(1)
        }} text="test button" />
        <Button className="" disabled={true} size="large" text="test button" />
        <Button size="middle" text="test button" />
        <Button size="small" className="k-test red" text="test button" />
        <Button onMouseEnter={log.bind(this)} onFocus={log.bind(this)} />
        <Button leftIcon="Camera" text="icons" rightIcon="Arrow-right" />
      </div >
      <div >
        <h3 >Icon</h3 >
        <Icon name="CAmera" className="k-test" style={{ color: 'red', backgroundColor: '#09f' }} />
        <Icon customIcon="k-test-icon" className="" />
      </div >
      <div >
        <h3 >MenuButton</h3 >
        <MenuButton />
        <MenuButton text="菜单按钮" items={[{ text: 'qwr' }, { text: 'rrr' }]} />
        <MenuButton text="菜单按钮" />
        <MenuButton text="菜单按钮" items={[{ text: 'qwr', value: '01' }, { text: 'rrr', value: '02' }]}
                    itemClick={log.bind(this)} hideOnItemClick={false} />
      </div >
      <div >
        <h3 >Input</h3 >
        <Input type={'password'} />
        <Input placeholder="placeholder"
               required={true} validateOn={{ focus: false }} />
        <Input placeholder="placeholder"
               disabled={true} />
        <Button text="ww" />
      </div >
    </div >
  )
}

export default App;