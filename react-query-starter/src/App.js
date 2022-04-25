import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import RQSuperHero from "./components/RQSuperHero.page";
import { RQParallel } from "./components/RQParallel.page";
import { RQDynamicParallel } from "./components/RQDynamic.page";
import DependentQuery from "./components/DependentQueries.page";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel-queries">RQ Parallel Queries</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
              </li>
              <li>
                <Link to="/rq-dependent-query">RQ Dependent Queries</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path={"/rq-dependent-query"}>
              <DependentQuery email={"usman@gmail.com"} />
            </Route>
            <Route path={"/rq-dynamic-parallel"}>
              <RQDynamicParallel heroesId={[1, 3]} />
            </Route>
            <Route path={"/rq-parallel-queries"}>
              <RQParallel />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHero />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
