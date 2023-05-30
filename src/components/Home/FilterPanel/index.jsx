import React from 'react';
// import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from './CheckboxProton';
// import FilterListToggle from './FilterListToggle';
// import SliderProton from '../../common/SliderProton';
import './style.css';

const FilterPanel = ({
  pokeTypes,
  changeChecked,
}) => (
  <div>
    <div className='input-group mt-3'>
      {pokeTypes?.map((pokeItem) => (
        <CheckboxProton
          key={pokeItem.id}
          pokeItem={pokeItem}
          changeChecked={changeChecked}
        />
      ))}
    </div>

  </div>
);

export default FilterPanel;
