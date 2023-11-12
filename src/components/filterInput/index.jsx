import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, TextTypography } from './FilterContainer.styled';
import { Input } from 'components/form/Form.styled';
import { selectFilter } from 'store/selectors';
import { setFilter } from 'store/filter/slice';

// Input in ContactList for filtering contacts
const FilterInput = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) =>
    dispatch(setFilter(value.trim()));

  return (
    <FilterContainer>
      <TextTypography>Find contacts by name</TextTypography>
      <Input
        onChange={handleFilter}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterContainer>
  );
};

export default FilterInput;
