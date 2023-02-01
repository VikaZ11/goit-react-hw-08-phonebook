import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Progress,
} from '@chakra-ui/react';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Tabs
      isFitted
      variant="enclosed"
      border={'1px solid grey'}
      borderRadius="10px"
      padding={'10px'}
    >
      <TabList mb="1em">
        <Tab _selected={{ color: 'white', bg: '#7FB2F9' }}>Add contact</Tab>
        <Tab _selected={{ color: 'white', bg: '#7FB2F9' }}>Contacts</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ContactForm />
        </TabPanel>
        <TabPanel>
          <Filter />
          {isLoading && !error && (
            <Progress size="xs" isIndeterminate margin={'5px'} />
          )}
          <ContactList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
