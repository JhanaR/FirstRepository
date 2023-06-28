function KeysList() {
  const users = [
    { id: 123, name: "kumar", email: "kumar@gmail.com", phone: 876543210 },
    { id: 456, name: "nadiya", email: "nadiya@gmail.com", phone: 876543210 },
    {
      id: 789,
      name: "sireesha",
      email: "sireesha@gmail.com",
      phone: 876543210,
    },
  ];
  return (
    <ul>
      {users.map((data) => (
        <li key={data.id}>
          name = {data.name}, email = {data.email}, phone = {data.phone}
        </li>
      ))}
    </ul>
  );
}
export default KeysList;
