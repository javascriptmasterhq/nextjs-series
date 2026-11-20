export const describe = ({ id, title, tags = [], author }) =>
  `#${id} ${title} [${tags.join(", ")}] by ${author?.name ?? "unknown"}`;

export const addNote = (list, note) => [...list, note];

export const pinNote = (list, id) =>
  list.map((note) => ({ ...note, pinned: note.id === id }));
