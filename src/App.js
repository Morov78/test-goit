import { useEffect, useState } from "react";

import { StorageContext, useLocalStorage } from "./hooks/useLocalStorage";

import ListCards from "./components/ListUsers/ListUsers";

import data from "./db/db.json";

function App() {
  const storage = useLocalStorage();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    const result = storage.get("users");

    if (result) {
      setUsers(result);

      return;
    }

    setUsers(data);

    storage.set("users", data);

    storage.set("followings", []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StorageContext.Provider value={storage}>
      {users && <ListCards users={users} />}
    </StorageContext.Provider>
  );
}

export default App;
