'use client';

import UserService from '@/services/firebase/services/UserService';

export default function ListsPage() {
  const createUser = async () => {
    const user = await UserService.createUser({
      name: 'Po',
    });
    console.log(user);
  };

  return (
    <main>
      <h1>Admin</h1>
      <p>Crear usuario</p>
      <button onClick={createUser}>Crear Usuario</button>
    </main>
  );
}
