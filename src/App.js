import Auth from "./components/Auth";
import Calender from "./components/Calender";
import TodoForm from "./components/TodoForm";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Auth/>
      <Calender/>
      <TodoForm/>
    </div>
  );
}

export default App;
