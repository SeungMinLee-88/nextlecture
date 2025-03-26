type ReadProps = {
    params: {
      id: string;
    };
  };
  export default async function Read(props: ReadProps) {
  const id = props.params.id;
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  console.log("env :" + `${process.env.NEXT_PUBLIC_API_URL}topics/${id}`);
  const resp = await fetch(url + `/topics/${id}` , {cache:'no-cache'});
  const topic = await resp.json();
    return (
      <>
        <h2>Read</h2>
        parameter: {props.params.id}
        <br></br>
        {topic.body}
      </>
    );
  } 