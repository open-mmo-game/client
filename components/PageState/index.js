import { Provider } from "react-redux";

import store from "../../state";

function PageState({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default PageState;
