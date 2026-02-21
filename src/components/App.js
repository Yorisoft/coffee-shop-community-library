import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutUsPage";
import AdminPage from "./AdminPage";
import BookDetails from "./BookDetails";
import DetailsAdmin from "./BookDetailsAdmin";
import BookEdit from "./BookEditAdmin";
import NotFoundPage from "./PageNotFound";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/books/:url" component={BookDetails} />
        <Route path="/DetailsAdmin/:name" component={DetailsAdmin} />
        <Route path="/bookEditAdmin" component={BookEdit} />

        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
