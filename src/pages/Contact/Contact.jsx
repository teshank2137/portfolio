import React from "react";
import {
  AiOutlineDownload,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import { Button, Input, Textarea } from "../../components/form";
import { Page } from "../../components/Page";
import { blue, green, pink, red, yellow } from "../../utils";
import { ContactForm, ContactWrapper, IconButton } from "./Contact.styled";

export const Contact = () => {
  return (
    <Page header="Contact">
      <ContactWrapper>
        <ContactForm>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Textarea lines={15} placeholder="Hi! How are you?" />
        </ContactForm>
        <div className="buttons">
          <div className="socials">
            <IconButton bg={pink}>
              <AiOutlineInstagram size={40} />
            </IconButton>
            <IconButton bg={blue}>
              <AiFillLinkedin size={40} />
            </IconButton>
            <IconButton bg={green}>
              <AiOutlineMail size={40} />
            </IconButton>
            <IconButton bg={yellow}>
              <AiFillGithub size={40} />
            </IconButton>
            <IconButton bg={red} tooltip="Download">
              <AiOutlineDownload size={40} />
            </IconButton>
          </div>
          <Button>Submit</Button>
        </div>
      </ContactWrapper>
    </Page>
  );
};
