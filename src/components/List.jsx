import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { SPACEX_ENDPOINT } from "../api/spaceX";
import Card from "./Card";
import Loading from "./Loading";

const List = ({ keyword }) => {
  const [currentKW, setCurrentKW] = useState(keyword);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${SPACEX_ENDPOINT}/launches/query`, {
        query: keyword === "" ? {} : { $text: { $search: keyword } },
        options: {
          page: keyword === currentKW ? page : 1,
        },
      });
      setPage(page + 1);
      setData((prev) => [...prev, ...data.docs]);
      setNextPage(data.hasNextPage);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (keyword !== currentKW) {
        setCurrentKW(keyword);
        setData([]);
      }
      fetchData();
    }, [500]);

    return () => clearTimeout(timeout);
  }, [keyword]);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={nextPage}
      loader={<Loading isLoading={loading} />}
      endMessage={
        <p className="fetch-end-message">No more additional content</p>
      }
    >
      {data.map((launch, index) => (
        <Card key={index} launch={launch} />
      ))}
    </InfiniteScroll>
  );
};

export default List;
