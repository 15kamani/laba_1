import './App.css';
function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <>
      <span>{isBanned ? "Вы забанены" : "Вы разбанены"}</span>
      <br />
      {isBanned ? (
        <button onClick={() => setIsBanned(true)}>Забанить</button>
      ) : (
        <button onClick={() => setIsBanned(false)}>Разбанить</button>
      )
      }
    </>
  );
}


export default App;