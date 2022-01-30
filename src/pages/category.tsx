import { Text, Wrap, WrapItem } from "@chakra-ui/react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../components/Service/Card";
import { db } from "../Services/firebase/config";

const CategoryPage: React.FunctionComponent<any> = () => {
  const params = useParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const unSub = onSnapshot(collection(db, params.title!), (doc) => {
      setData(doc.docs.map((doc) => doc.data()));
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <Wrap margin={"2rem"}>
      {data.map((data: any) => {
        return (
          <WrapItem>
            <ServiceCard
              title={data.title}
              BasicValue={data.BasicValue}
              BasicPrice={data.BasicPrice}
              AdvanceValue={data.AdvanceValue}
              AdvancePrice={data.AdvancePrice}
              PremiumValue={data.PremiumValue}
              PremiumPrice={data.PremiumPrice}
              username={data.ServiceProvider}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default CategoryPage;
