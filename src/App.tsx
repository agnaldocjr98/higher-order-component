import { PostComponent } from "./components/posts";
import { UserComponent } from "./components/users";

function App() {
  return (
    <div className="App">
      <h1>HIGHER ORDER COMPONENT</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "10px",
        }}
      >
        <PostComponent />
        <UserComponent />
      </div>
    </div>
  );
}

export default App;
