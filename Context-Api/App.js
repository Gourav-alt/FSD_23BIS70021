import MyProvider from "./MyProvider";
import Display from "./Display";

function App(){
  return(
    <MyProvider>
      <Display/>
    </MyProvider>
  );
}
export default App;