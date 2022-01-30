import { Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { ILevel, LEVEL } from "../../types";

interface IServiceFormProps {
  level: LEVEL;
  detailName: string;
  detailValue: string;
  priceName: string;
  priceValue: number;
  onChange: (e: any) => void;
}
const ServiceForm: React.FunctionComponent<IServiceFormProps> = ({
  level,
  detailName,
  detailValue,
  priceName,
  priceValue,
  onChange,
}) => {
  return (
    <>
      <Text>
        {level === LEVEL.BASIC
          ? LEVEL.BASIC
          : level === LEVEL.ADVANCE
          ? LEVEL.ADVANCE
          : LEVEL.PREMIUM}
      </Text>

      <Textarea name={detailName} value={detailValue} onChange={onChange} />
      <Input
        type={"number"}
        name={priceName}
        value={priceValue}
        onChange={onChange}
      />
    </>
  );
};

export default ServiceForm;
