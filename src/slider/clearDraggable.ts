const clearDraggable = (node: ChildNode) => {
  if (node) {
    (node as HTMLElement).draggable = false;
    if ((node as HTMLElement).childNodes) {
      (node as HTMLElement).childNodes.forEach((childNode: ChildNode) =>
        clearDraggable(childNode)
      );
    }
  }
};

export default clearDraggable;
