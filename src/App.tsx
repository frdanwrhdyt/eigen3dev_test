import React, { useState, useEffect } from "react";
import { List, Divider, Button } from "antd";

export default function App() {
  const [display, setDisplay] = useState<number>();
  const [data, setData] = useState<any[]>([]);
  async function NewsApi() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=7900c016c15d400ba3f750a23ec10bcc";
    const response = await fetch(url);
    return response.json().then((data) => {
      setData(data.articles);
    });
  }
  function showDetail(i: any) {
    setDisplay(i);
  }
  useEffect(() => {
    NewsApi();
  }, []);
  console.log(data);
  return (
    <>
      <div
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Divider orientation="center">
          <h1>Headline News</h1>
        </Divider>
        <List
          split={true}
          bordered
          itemLayout="vertical"
          size="small"
          grid={{ gutter: 16, column: 4 }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 12,
          }}
          dataSource={data}
          renderItem={(item, i) => (
            <List.Item key={i}>
              <List.Item.Meta
                title={<a href={item.url}>{item.title}</a>}
                description={item.description}
              />
              <a href={item.urlToImage}>
                <input
                  type="image"
                  src={item.urlToImage}
                  alt="image view"
                  width={300}
                  height={200}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                />
              </a>
              <p>{display === i ? item.content : ""}</p>
              <Button
                style={{ visibility: display === i ? "hidden" : "visible" }}
                type="link"
                onClick={() => {
                  showDetail(i);
                }}
              >
                Read more
              </Button>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
