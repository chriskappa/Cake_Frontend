import { Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "../configs/config.js";
import NotFoundPage from "@/pages/NotFoundPage.js";

function AuthenticatedRoutes() {
    return (
        <Layout>
            <Switch>
                {routes.map(({ path, component: Component, exact }) => (
                    <Route key={path} path={path} exact={exact}>
                        <Component />
                    </Route>
                ))}
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default AuthenticatedRoutes;
