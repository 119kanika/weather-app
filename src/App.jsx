import { Provider } from "react-redux"
import Body from "./components/Body"
import AppStore from "./utils/AppStore"


const App = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-400 min-h-screen w-full">
      <Provider store={AppStore}>
        <Body/>
      </Provider>
    </div>
  )
}

export default App