// App.jsx
import AvatarComponent from "./components/AvatarComponent";
import ButtonPrimary, { ButtonSecondary } from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  function handleClick() {
    alert("buttonClick!");
  }
  const users = [
    {
      id: 1,
      username: "user1",
      profile:
        "https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/32849/1704732899_Cheemsdogsittingmeme.png&width=600&height=600&quality=90&format=auto&fit=pad",
    },
    {
      id: 2,
      username: "user2",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyn96DF0eWaB61O5bj51zXHzReYsFR7dxIHgz5DOkvtk-LKA4whw6SdRbj5eErQIxD5Y&usqp=CAU",
    },
    {
      id: 3,
      username: "user3",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-e-L2klNs5QYcZiOcN68oBtf3E5IJXpFq0UxVFX-tJdNIc32R4tNkXpiTXfzc8PUKpM&usqp=CAU",
    },
  ];
  return (
    <>
      <ButtonPrimary title="Login" color="bg-gray-600" onClick={handleClick} />
      <ButtonPrimary title="SignUp" color="bg-green-600" />
      <h1 className="text-5xl text-center py-10 font-bold">Top User</h1>
      {users.map((user) => (
        <AvatarComponent 
        key={user.id}
         username={user.username}
         image={user.profile}/>
      ))}
    </>
  );
}

export default App;
