let waitlist = [];
let nextId = 1;

function getAll() {
  return waitlist;
}

function getById(id) {
  return waitlist.find((entry) => entry.id === id);
}

function create(data) {
  const newEntry = {
    id: nextId++,
    ...data,
    createdAt: new Date().toISOString()
  };
  waitlist.push(newEntry);
  return newEntry;
}

function update(id, data) {
  const index = waitlist.findIndex((entry) => entry.id === id);
  if (index === -1) return null;
  waitlist[index] = { ...waitlist[index], ...data };
  return waitlist[index];
}

function remove(id) {
  const index = waitlist.findIndex((entry) => entry.id === id);
  if (index === -1) return false;
  waitlist.splice(index, 1);
  return true;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};