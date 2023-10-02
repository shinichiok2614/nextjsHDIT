"use client";

import { useRouter } from "next/navigation";
// import "@/styles/app.css";
// import "@/styles/tuan.css";
import x from "@/styles/app.module.css";
import y from "@/styles/tuan.module.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import AppTable from "@/components/app.table";

const a = () => {
  const router = useRouter();
  const handleButton = () => {
    // alert("me");
    // router.push("/");
    router.push("/admin");
  };
  return (
    <>
      {/* <div className="red">
        <span className="red">nested abc</span>
      </div> */}
      <div className={x["red"]}>
        <span className={y["red"]}>nested abc</span>
      </div>

      <Button variant="primary">React Bootstrap</Button>
      <br />
      <Button variant="success">React Bootstrap</Button>
      <br />
      <Button variant="danger">React Bootstrap</Button>
      <br />

      <button onClick={() => handleButton()}>Back</button>
      <AppTable/>
    </>
  );
};
export default a;

