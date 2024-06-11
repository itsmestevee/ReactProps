const ImageComponent = (props) => {
  const user = {
    avatar:
      "https://i.pinimg.com/736x/b3/29/d4/b329d400ac981ed0fb440bfeaee083ed.jpg",
    name: "John Smith",
  };
  return (
    <div>
      <img className="rounded-full w-64 h-64" src={props.avatar} alt={props.name} />
    </div>
  );
};

export default ImageComponent;
