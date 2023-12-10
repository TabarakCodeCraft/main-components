import React, { useState } from "react";
import "./App.css";
import Container from "./components/container/container";
import Header from "./components/header/header";
import Button from "./components/butn/button";
import Modal from "./components/modal/modal";
import Space from "./components/space/space";
import Text from "./components/text/text";
import Input from "./components/input/input";
import IconButton from "./components/iconBtn/iconBtn";
import Table from "./components/table/table";
function App() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Auther",
      dataIndex: "auther",
      key: "auther",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];
  const list = [
    {
      key: "1",
      title: "eat, pray, love",
      auther: "Eilzabeth Gelbert",
      price: "10 $",

    }, {
      key: "2",
      title: "The Forty Rules of Love",
      auther: "Elif shafak",
      price: "15 $",

    }, {
      key: "3",
      title: "Infinite Horizons",
      auther: "Eilzabeth Gelbert",
      price: "20 $",
    }, {
      key: "4",
      title: "Whispers of the Soul",
      auther: "Harper Steele",
      price: "25 $",
    }, {
      key: "5",
      title: "Prelude to Tomorrow",
      auther: "Aurora Skye",
      price: "19 $",
    }, {
      key: "6",
      title: "Symphony of Silence",
      auther: "Theodore Ivory",
      price: "30 $",
    },
    {
      key: "7",
      title: "Spectrum of Dreams",
      auther: "Theodore Ivory",
      price: "40 $",
    }


  ]

  const headerLinks = [
    {
      title: "Home",
      href: "https://www.youtube.com/watch?v=V1Pl8CzNzCw&pp=ygUYaG9tZSDYqNmK2YTZiiDYp9mK2YTZiti0",
    },
    {
      title: "About",
      href: "https://www.youtube.com/watch?v=_VHuMh-Jky0&pp=ygUJbmV2ZXJtb3Jl",
    },
    {
      title: "Contact",
      href: "https://www.youtube.com/watch?v=b7OyPg5JBnQ&pp=ygUWc291YWxtYXRlIGFuZHJlYSB2YW56bw%3D%3D",
    },
  ];
  return (<>


    <Header headerLink={headerLinks} brand={"Star✩"} width={1200} />
    <Container width={1300}>
      <Space height={"20px"} />
      <Button onClick={showModal} size={"large"}>Search</Button>
      <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
        <Text blod={"true"} size={20}>Star For Books</Text>
        <Space width={100} height={"10px"} />
        <Text size={15}>Enter title:</Text>
        <Input placeholder="Input" onChange={(e) => console.log(e.target.value)}></Input>

        <div className="flex">
          <Button type={"primary"} size={"large"}>
            Go
            <IconButton icon={"Facebook"} size={"large"} type={"default"} />
          </Button>

          <Button type={"secodary"} size={"medium"}>
            Go
            <IconButton icon={"instagram"} size={"large"} type={"secondary"} />
          </Button>

          <Button type={"default"} size={"small"}>
            Go
            <IconButton icon={"folder"} size={"large"} type={"secondary"} />
          </Button>
        </div>

      </Modal>

      <Table columns={columns} list={list}></Table>

    </Container >

  </>
  )
}
export default App;