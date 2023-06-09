import { toolTypes } from "../../constants";
import { store } from "../../store/store";
import { setElements } from "../whiteboardSlice";
import { createElement } from "./createElement";

export const updateElement = (
  { id, x1, x2, y1, y2, type, index },
  elements
) => {
  const elementsCopy = [...elements];

  switch (type) {
    case toolTypes.RECTANGLE:
      const updatedElement = createElement({
        id,
        x1,
        y1,
        x2,
        y2,
        toolType: type,
      });

      elementsCopy[index] = updatedElement;
      store.dispatch(setElements(elementsCopy));
      break;
    default:
      throw new Error("Something went wrong when updating element");
  }
};
