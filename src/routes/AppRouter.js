import { Routes, Route } from "react-router-dom";
// Importación de Paginas
import { Articles } from "../pages/Articles";
import { Article } from "../pages/Article";
import { Category } from "../pages/Category";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <>
      {/* Listado de url posibles */}
      <Routes>
        <Route index path="/" element={<Category />} />
        <Route
          path="/recent-now"
          element={<Articles title={"Most Recent"} filter={"date"} />}
        />
        <Route
          path="/top-rated"
          element={<Articles title={"Top Rated view"} filter={"views"} />}
        />
        <Route path="/recent-now/:id" element={<Article />} />
        <Route path="/top-rated/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
