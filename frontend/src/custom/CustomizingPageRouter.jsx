import { useParams } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { createElement } from "react";

export const CustomizingPageRouter = () => {
  const { page } = useParams();
  try {
    const GeneratingComponent = () => require(`../pages/${page}`).default
    return createElement(GeneratingComponent());
  } catch (error) {
    return <NotFound />;
  }
};
