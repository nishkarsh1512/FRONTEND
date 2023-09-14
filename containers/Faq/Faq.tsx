import { Select } from "@mantine/core";
import { BiSearchAlt } from "react-icons/bi";
import { Accordion } from "@mantine/core";

export const Faq = () => {
  const faqs = [
    {
      value: "faq1",
      ques: "How is the IoT network reliability ensured?",
      ans: "The sensors are always connected through a reliable array of networking equipment such as routers, boosters and repeaters to the internet all the time.",
    },
    {
      value: "faq2",
      ques: "How long is the installation process?",
      ans: "A sensor installation is completed in less than 5 min.",
    },
    {
      value: "faq3",
      ques: "Is your data secure?",
      ans: "Our security protocol complies with TLS 1.2 and UL 2900-2-2. The data in the sensor is stored locally with scheduled uploads to cloud server using the most cyber secure platform (certified by UL) available in the world.",
    },
    {
      value: "faq4",
      ques: "Is your hardware industry compliant & certified?",
      ans: "Yes, our Hardware is IP68 approved with IECEx/ATEX Zone 1, ASME Class 1 Div. 2, UL746C approved.",
    },
  ];

  return (
    <div
      className="lg:px-4 w-full h-full relative xl:bottom-60 bottom-40 flex flex-col items-center z-10"
      id="faq"
    >
      <div className="flex flex-col gap-9 items-center mb-16">
        <h1 className="sm600:text-4xl text-2xl font-semibold leading-10">
          Frequently Asked Questions
        </h1>
        <span className="text-gray-400 font-medium">
          Have questions? We're here to help.
        </span>
        <Select
          placeholder="Search"
          data={faqs.map((item) => item.ques)}
          className="shadow-SearchInput sm600:w-80 w-64"
          icon={<BiSearchAlt size={20} />}
          rightSection={<></>}
          clearable
          maxDropdownHeight={280}
          searchable
          nothingFound={<>No matches found!</>}
        />
      </div>
      <Accordion
        defaultValue="customization"
        className="lg:w-60-rem md:w-160 w-full"
        classNames={{label: "font-semibold", chevron: "relative sm:right-0 right-2"}}
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            value={faq.value}
            key={index}
            className={`bg-transparent sm:py-3 py-2 ${index === 3 && "border-none"}`}
          >
            <Accordion.Control className="xl:text-2xl sm:text-lg text-base">
              {faq.ques}
            </Accordion.Control>
            <Accordion.Panel className="text-gray-400 font-medium sm:font-medium sm:mr-10 sm:tracking-wider">
              {faq.ans}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
