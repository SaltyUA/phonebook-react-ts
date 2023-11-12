import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/thunks';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className="list-group-item">
      <span className="fw-medium">
        {name} : {number}
      </span>
      <button
        className="btn btn-danger ms-4"
        onClick={handleDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
