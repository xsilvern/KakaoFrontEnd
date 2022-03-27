type PhotoType = {
  address: string;
  description: string;
};

const Photo = (props: PhotoType) => {
  const { address, description } = props; //destructuring
  return (
    <>
      <img src={address} />
      <article>{description}</article>
    </>
  );
};

export default Photo;
