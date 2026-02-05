import logo from './logo.svg';
import './App.css';
import TreeStageChangesByUseState from './Components/TreeStageChangesByUseState';
import MusicPlayerByUseEffect from './Components/MusicPlayerByUseEffect';
import SettingPanel from './Components/AppPanelSettingByContextAPI/SettingPanel';
import { SettingContextProvider } from './Components/AppPanelSettingByContextAPI/SettingContext';
import UserApp from './Components/AppPanelSettingByContextAPI/UserApp';
import ShoppingCartbyUseReducer from './Components/ShoppingCartbyUseReducer';
import WordsCounterByUseRef from './Components/WordsCounterByUseRef';

function App() {
  return (
    <div>
      <TreeStageChangesByUseState/>
      <MusicPlayerByUseEffect/>
      <SettingContextProvider>
      <SettingPanel/>
      <UserApp/>
      </SettingContextProvider>
      <ShoppingCartbyUseReducer/>
      <WordsCounterByUseRef/>
    </div>
  );
}

export default App;
