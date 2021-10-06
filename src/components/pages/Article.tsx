import React, { useState } from "react";
import { Typography, Card } from "antd";



export default function Article() {
   const [text, setText] = useState("Untitled");
   const [title, setTitle] = useState("");
//   const [date, setDate] = useState(" ");
  
  return (
    <Card
      title={
        <Typography.Text
          editable={{
            onChange: setText,
            maxLength: 100,
            autoSize: false
          }}
        >
          {text}
        </Typography.Text>
      }
     
    ></Card>
  );
}
