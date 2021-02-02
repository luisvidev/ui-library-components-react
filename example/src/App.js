import React from 'react'

import { ExampleComponent } from 'lium-react-ui-library'
import { ButtonList } from './components/ButtonList';
import { InputTextList } from './components/InputTextList';
import { InputNumberList } from './components/InputNumberList';
import { SelectInputList } from './components/SelectInputList';
import { AutocompleteList } from './components/AutocompleteList';

const styles = {
  margin: "100px"
}

const App = () => {
  return (
    <div style={styles}>
      <br/>
      <ExampleComponent text="Create React Library Example 😄" />
      <br/>
      <hr/>
      <ButtonList />
      <br/>
      <hr/>
      <InputTextList />
      <br/>
      <hr/>
      <InputNumberList />
      <br/>
      <hr/>
      <SelectInputList />
      <br/>
      <hr/>
      <AutocompleteList />
    </div>
  );
}

export default App
