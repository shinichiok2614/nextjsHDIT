"use client";

import useSWR from "swr";

export default function Home() {
  // const res =await fetch("http://localhost:8000/blogs");
  // console.log(">>>res:",await res.json());
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher
  );
  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:8000/blogs",
  //   fetcher,
  //   {
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // );

  console.log("check data", data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     console.log(">>>res:", await res.json());
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <div>helloworld</div>
      <div>{data?.length}</div>
    </>
  );
}
