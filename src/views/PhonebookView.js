import FormContacts from "components/FormContacts";
import Filter from "components/Filter";
import ContactsList from "components/ContactsList";
import Section from "components/Section";

export default function PhonebookView() {
  return (
    <Section title="Create contact">
      <FormContacts />
      <Filter />
      <ContactsList />
    </Section>
  );
}
