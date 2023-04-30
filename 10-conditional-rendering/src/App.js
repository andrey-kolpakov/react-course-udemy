import "./App.css";
import PathInfo from "./components/PathInfo";

function App() {
  return (
    <div className="App">
      <div>
        <PathInfo type="dog" age={3} hasPet={true} />

        <PathInfo type="cat" age="7" />

        <PathInfo type="mouse" age="5" hasPet />
      </div>
    </div>
  );
}
    
//Выше видно, что можно передать не только строки, но и любые другие типы данных, например числа
//Выше видно, что можно передать true просто написав hasPet (оно возвращает true, кстати, если вывести props)

export default App;
