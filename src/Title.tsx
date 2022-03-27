type TitleType = {
  test: string;
  subtest?: string;
};

const Title = (props: TitleType) => {
  const { test, subtest } = props;
  return (
    <>
      <h1>{test}</h1>
      <hr />
      {subtest !== undefined && <h3>{subtest}</h3>}
    </>
  );
};

export default Title;
