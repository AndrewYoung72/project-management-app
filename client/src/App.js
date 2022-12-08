import Header from "./component/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./component/Clients"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className="container">
      <Clients />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
