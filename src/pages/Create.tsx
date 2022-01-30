import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../Services/firebase/config";
import { useContext } from "react";
import GlobalContext from "../context";
import { useNavigate } from "react-router-dom";

const initialForm = {
  title: "",
  category: "HairCut",
  BasicValue: "",
  BasicPrice: 0,
  AdvanceValue: "",
  AdvancePrice: 0,
  PremiumValue: "",
  PremiumPrice: 0,
};

const CreatePage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const { state, setState } = useContext(GlobalContext);
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.user != true) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, form.category), {
        title: form.title,
        ServiceProvider: state.username,
        BasicValue: form.BasicValue,
        BasicPrice: form.BasicPrice,
        AdvanceValue: form.AdvanceValue,
        AdvancePrice: form.AdvancePrice,
        PremiumValue: form.PremiumValue,
        PremiumPrice: form.PremiumPrice,
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <FormControl padding={"2rem"}>
        <Text textAlign={"center"} fontWeight={"black"} fontSize={"lg"}>
          {`${state.username}'s Service`}
        </Text>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          type={"title"}
          name={"title"}
          value={form.title}
          onChange={handleChange}
          placeholder="Service Title"
          required
        />
        <FormLabel htmlFor="category" marginTop={"1rem"}>
          Service category
        </FormLabel>
        <Select name="category">
          <option value="HairCut">Hair Cut</option>
          <option value="Education">Education</option>
          <option value="Editing">CV and Resume Editing</option>
          <option value="CarWashing">Car Washing</option>
          <option value="Sport">Sport</option>
        </Select>

        <FormLabel htmlFor="BasicValue" marginTop={"1rem"}>
          Base tier service details
        </FormLabel>
        <Textarea
          name={"BasicValue"}
          value={form.BasicValue}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor="BasicPrice" marginTop={"1rem"}>
          Basic tier price
        </FormLabel>
        <Input
          type={"number"}
          name={"BasicPrice"}
          value={form.BasicPrice}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor="AdvanceValue" marginTop={"1rem"}>
          Advance tier service details
        </FormLabel>
        <Textarea
          name={"AdvanceValue"}
          value={form.AdvanceValue}
          onChange={handleChange}
          required
        />
        <FormLabel htmlFor="AdvancePrice" marginTop={"1rem"}>
          Advance tier service price
        </FormLabel>
        <Input
          type={"number"}
          name={"AdvancePrice"}
          value={form.AdvancePrice}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="PremiumValue" marginTop={"1rem"}>
          Premium tier service details
        </FormLabel>

        <Textarea
          name={"PremiumValue"}
          value={form.PremiumValue}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="PremiumPrice" marginTop={"1rem"}>
          Premium tier service price
        </FormLabel>
        <Input
          type={"number"}
          name={"PremiumPrice"}
          value={form.PremiumPrice}
          onChange={handleChange}
          required
        />
        <Button
          marginTop={"1rem"}
          width={"100%"}
          backgroundColor={"teal"}
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default CreatePage;
