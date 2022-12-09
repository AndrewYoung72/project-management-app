import Header from "./component/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./component/Clients";
import AddClientModal from "./component/addClientModal";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        },
      }
    }
  }
})


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
})


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className="container">
      <AddClientModal />
      <Clients />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
