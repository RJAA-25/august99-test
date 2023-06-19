import { useState } from "react";
import Searchbar from "./components/Searchbar";
import List from "./components/List";
import { SPACEX_ENDPOINT } from "./api/spaceX";
import axios from "axios";
import Container from "./components/Container";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <Container>
      <Searchbar keyword={keyword} setKeyword={setKeyword} />
      <List keyword={keyword} />
    </Container>
  );
}

export default App;
