import Accordion from "./components/Accordion";

function AccordionPage() {
  const listOfItems = [
    {
      id: "5dscdscx55sdokvf",
      label: "can i use react ?",
      content: "Offcurse you can",
    },
    {
      id: "5dscdscxfvcx55sdokvf",
      label: "can i use Html ?",
      content: "Offcurse you can",
    },
    {
      id: "5dscdscx55sdokbgfvf",
      label: "can i use CSS ?",
      content: "Offcurse you can",
    },
    {
      id: "5dscdedsxscx55sdokvf",
      label: "can i use Javascript ?",
      content: "Offcurse you can",
    },
    {
      id: "5dscdscx55erdsfewfsdokvf",
      label: "can i use NodeJs ?",
      content: "Offcurse you can",
    },
  ];

  return (
    <div>
      <Accordion items={listOfItems} />
    </div>
  );
}

export default AccordionPage;
