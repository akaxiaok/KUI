import React from 'react';
import './style';
import {
  Button,
  Icon,
  Input,
  MenuButton,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'Components';


function logItem(e, item) {
  console.log(item.text, item.value, item.index);
}

function log(e, v) {
  console.log(e, v);
}

function App(props) {
  let input;
  return (
    <div style={{ fontSize: '14px', margin: '10px' }} >
      <Table style={{ width: '500px', margin: '0 auto' }} height='300px' >
        <TableHeader >
          <TableHeaderColumn >
            Header
          </TableHeaderColumn >
          <TableHeaderColumn >
            Header
          </TableHeaderColumn >
        </TableHeader >
        <TableBody stripedRows={true} >
          <TableRow >
            <TableColumn >
              Column
            </TableColumn >
            <TableColumn >
              Column
            </TableColumn >
          </TableRow >
          <TableRow >
            <TableColumn >
              Column
            </TableColumn >
            <TableColumn >
              Column
            </TableColumn >
          </TableRow >
        </TableBody >
      </Table >
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
        <MenuButton text="菜单按钮" itemClick={log.bind(this)} items={[{ text: 'qwr' }, { text: 'rrr' }]} />
        <MenuButton text="菜单按钮" />
        <MenuButton text="菜单按钮" items={[{ text: 'qwr', value: '01' }, { text: 'rrr', value: '02' }]}
                    itemClick={log.bind(this)} hideOnItemClick={false} />
      </div >
      <div >
        <h3 >Input</h3 >
        <Input type={'password'} />
        <Input placeholder="placeholder"
               required={true}
               validateOn={{ focus: false }}
               onChange={log.bind(this)}
               validator={(value, type) => {
                 const valid = !!value.match(/^[0-9]+$/g);
                 return { valid, errMsg: 'This should be numbers' }
               }}
               items={['Jan', 'Feb', 'Mar', 'Apr']}
        />
        <br />
        <Input placeholder="placeholder"
               required={true}
               validateOn={{ focus: false }}
               onChange={log.bind(this)}
               items={['Jan', 'Feb', 'Mar', 'Apr']}
               ref={input => {
               }}
               wrappedRef={wrapped => {
                 input = wrapped;
               }}
        />
        <Input placeholder="placeholder"
               disabled={true} />
        <Input placeholder="placeholder"
               type="password" />
        <Input
        />
        <Button text="focus" onClick={() => {
          input.focus()
        }} />
      </div >
      <Input type={'textarea'} disabled={true} />
      <Input type={'textarea'} placeholder="place" />
      <Input type={'textarea'} required />

    </div >
  )
}

export default App;