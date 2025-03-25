"use client"
import Link from 'next/link';
import { useParams, useRouter } from "next/navigation";
 
export function Control() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  console.log("url : " + url);
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  console.log("id : " + id);
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
        <li><Link href={"/update/"+id}>Update</Link></li>
        <li><button onClick={async ()=>{
              const resp = await fetch(url + `/topics/${id}`, {
                method: 'DELETE',
              });
              await resp.json();
              router.push('/');
              router.refresh();
            }}>delete</button></li>
      </> : null}
    </ul>
  );
}
<font face="NanumGothic, sans-serif"><span style="font-size: 10.89px; white-space: normal;">
</span></font>