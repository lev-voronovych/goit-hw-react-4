import Stats from "./components/Stats/Stats"
import Friends from "./components/Friends/Friends"

// data
import friends from "./data/friends.json"
import stats from "./data/stats.json"

function App() {


  return (
    <>
      <Stats stats={stats} title="title"/>
<Friends friends={friends}/>
    </>
  )
}

export default App
