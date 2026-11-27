const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getNote = async (id) => {
  await wait(300);
  if (id > 3) throw new Error(`note ${id} not found`);
  return { id, title: `Note ${id}` };
};

// await pauses THIS function, not the whole program
async function main() {
  let t = Date.now();
  const a = await getNote(1);
  const b = await getNote(2);
  console.log("one by one:", a.title, b.title, `${Date.now() - t} ms`);

  t = Date.now();
  const all = await Promise.all([getNote(1), getNote(2), getNote(3)]);
  console.log("in parallel:", all.length, "notes", `${Date.now() - t} ms`);

  try {
    await getNote(99);
  } catch (err) {
    console.log("caught:", err.message);
  }
}
main();
