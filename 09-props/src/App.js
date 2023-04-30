import "./App.css";
import PathInfo from "./components/PathInfo";

function App() {
  return (
    <div className="App">
      <div>
        <PathInfo type="dog" age={3}/>  

        <PathInfo type="cat" age="7"/>

        <PathInfo type="mouse" age="5"/>
      </div>
    </div>
  );
}

//Выше видно, что можно передать не только строки, но и любые другие типы данных, например числа

export default App;
