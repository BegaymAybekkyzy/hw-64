import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { IBlogDataAPI, IContact } from '../../types.d.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards.tsx';

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IBlogDataAPI>("blogData.json");
      setContacts(response.data.contacts);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [ fetchPosts]);

  return (
    <div className="container">
      <div>
        <h1 className="mb-4">Свяжитесь с нами</h1>
      </div>
      <div className="row row-cols-2 gap-3">
        {loading ? <Loader />
          : contacts.map((contact, index) => (
            <EmployeeCards
              title={contact.position}
              key={index}
              text={contact.description}
              imagePath={contact.photo}
              phone={contact.phone}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Contacts;