import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export interface NewLeadEmailProps {
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  leadMessage: string;
}

export const NewLeadEmail = ({
  leadName,
  leadEmail,
  leadMessage,
  leadPhone,
}: NewLeadEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Um novo lead está tentando nos contactar</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Nova menssagem
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Um novo lead acaba de chegar e ele está tentando nos mandar
                  uma menssagem
                </Text>

                <Text className="text-base">
                  Aqui estão as informações dele:
                </Text>
              </Row>
            </Section>

            <ul>
              <li className="mb-20" key={1}>
                <strong>Nome:</strong> {leadName}
              </li>
              <li className="mb-20" key={1}>
                <strong>Email:</strong> {leadEmail}
              </li>
              <li className="mb-20" key={1}>
                <strong>Número do celular:</strong> {leadPhone}
              </li>
              <li className="mb-20" key={1}>
                <strong>Menssagem:</strong> {leadMessage}
              </li>
            </ul>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewLeadEmail;
