import { Provider } from "react-redux"
import Body from "./Body"

import AppStore from "./utils/AppStore"

const App = () => {
  return (
    <div>
      <Provider store={AppStore}>
        <Body/>
      </Provider>
    </div>
  )
}

export default App