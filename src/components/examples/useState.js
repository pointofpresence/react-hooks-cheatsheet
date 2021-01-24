const DeclareStateVar = `() => {
  const [count] = useState(100)
  return <div> Значение переменной состояния: {count}</div>
}`

const UpdateStateVar = `() => {
  const [age, setAge] = useState(19)
  const handleClick = () => setAge(age + 1)

  return (
    <div>
      Сегодня мне {age}
      <div>
        <button onClick={handleClick}>Стать старше! </button>
      </div>
    </div>
  )
}`

const MultipleStateVars = `() => {
  const [age, setAge] = useState(19)
  const [siblingsNum, setSiblingsNum] = 
    useState(10)

  const handleAge = () => setAge(age + 1)
  const handleSiblingsNum = () => 
      setSiblingsNum(siblingsNum + 1)
 

  return (
    <div>
      <p>Сегодня мне: {age}</p>
      <p>У меня соседей: {siblingsNum}</p>

      <div>
        <button onClick={handleAge}>
          Стать старше! 
        </button>
        <button onClick={handleSiblingsNum}>
            Больше соседей! 
        </button>
      </div>
    </div>
  )
}`

const StateObject = `() => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 })
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
  const { age, siblingsNum } = state

  return (
    <div>
      <p>Сегодня мне: {age}</p>
      <p>У меня соседей: {siblingsNum}</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>
            Стать старше!
        </button>
        
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          Больше соседей!
        </button>
      </div>
    </div>
  )
}`

const StateFromFn = `() => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#"
  })

  return <div>Токен: {token}</div>
}`

const CounterFnSetState = `() => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Значение счетчика: {count}</p>
      <button onClick={() => setCount(0)}>Сброс</button>
      <button 
        onClick={() => setCount(prevCount => prevCount + 1)}>
        Плюс (+)
      </button>
      <button 
        onClick={() => setCount(prevCount => prevCount - 1)}>
       Минус (-)
      </button>
    </>
  );
}`

export {
  DeclareStateVar,
  UpdateStateVar,
  MultipleStateVars,
  StateObject,
  StateFromFn,
  CounterFnSetState
}
