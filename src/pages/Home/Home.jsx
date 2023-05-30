import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FilterPanel from '../../components/Home/FilterPanel';
import CardList from '../../components/Home/CardList/index';
import SearchBar from '../../components/Home/SearchBar/index';
import Pagination from 'react-bootstrap/Pagination';
import PaginationComp from '../../components/Home/FilterPanel/PaginationComp';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Logo from '../../assests/Pokédex_logo.png'
import './style.css';

const Home = () => {
  const [pokeData,setPokeData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [offset, setOffset] = useState(0);
	const [allPokemons, setAllPokemons] = useState(pokeData);
  const [searchInput, setSearchInput] = useState('');
  const [limit, setLimit] = useState(20);


  const [pokeTypes, setPokeTypes] = useState([
    { id: 1, checked: false, label: 'Grass', name: 'grass' },
    { id: 2, checked: false, label: 'Fire', name: 'fire' },
    { id: 3, checked: false, label: 'Bug', name: 'bug' },
    { id: 4, checked: false, label: 'Fairy', name: 'fairy' },
    { id: 5, checked: false, label: 'Dragon', name: 'dragon' },
    { id: 6, checked: false, label: 'Shadow', name: 'shadow' },
    { id: 7, checked: false, label: 'Ground', name: 'ground' },
    { id: 8, checked: false, label: 'Normal', name: 'normal' },
    { id: 9, checked: false, label: 'Psychic', name: 'psychic' },
    { id: 10, checked: false, label: 'Fighting', name: 'fighting' },
    { id: 11, checked: false, label: 'Flying', name: 'flying' },
    { id: 12, checked: false, label: 'Poison', name: 'poison' },
    { id: 13, checked: false, label: 'Rock', name: 'rock' },
    { id: 14, checked: false, label: 'Ghost', name: 'ghost' },
    { id: 15, checked: false, label: 'Water', name: 'water' },
    { id: 16, checked: false, label: 'Electric', name: 'electric' },
    { id: 17, checked: false, label: 'Ice', name: 'ice' },
    { id: 18, checked: false, label: 'Dark', name: 'dark' },
    { id: 19, checked: false, label: 'Unknow', name: 'unknow' },

  ]);

	const getAllPokemons = async () => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setPokeData([...pokeData, ...results]);
    setAllPokemons([...pokeData, ...results]);
    
		setLoading(false);
	};

  

  //---search-bar
  const filteredPokemons = pokeData.filter(pokemon =>
    pokemon.name.includes(searchInput.toLowerCase())
  );

  const handleChangeChecked = (name) => {
    const pokeTypesStateList = pokeTypes;
    
    const changeCheckedPokeTypes = pokeTypesStateList.map((item) =>
      item.name == name ? { ...item, checked: !item.checked } : item
    );
    setPokeTypes(changeCheckedPokeTypes);

    let updatedList = filteredPokemons;

    // Filter
    const pokeTypesChecked = pokeTypes
      .filter((item) => item.checked)
      .map((item) => item.name.toLowerCase());

    if (pokeTypesChecked.length) {
      updatedList = updatedList?.filter((data) => 
        data.types.map((item) =>
        (item.type.name)).includes(name)
      )
    }
    setPokeData([...updatedList]);
  };


  const onClickLoadMore = () => {
		setOffset(offset + 20);
	};

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  return (
    <div className='container-fluid'>
        <div className='row col-md-12 justify-content-between align-items-center p-4 m-0'>
          <div className='col-md-2'>
            <img src={Logo} alt="" />
          </div>
          <div className='col-md-4' >
            <SearchBar
              value={searchInput}
              changeInput={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
        <Container>
        
        <div className='row col-md-12 p-4' style={{ borderBottom : "1px solid #00000040"}} >
          <div className='col-md-8 text-start' >
            <span className="search-result px-4">Total results : {pokeData?.length}</span>
          </div>
        </div>
        <Row className='g-0'>
          <Col md={12} style={{ display: 'flex', justifyContent: "space-around" }}>
            <Col md={3}>
              <FilterPanel
                pokeTypes={pokeTypes}
                changeChecked={handleChangeChecked}
              />
            </Col>

            <Col md={9} className="d-flex  flex-wrap" >
              {
                loading ? ( 
                  <Box sx={{ display: 'flex', padding: "20px"}}>
                    <CircularProgress />
                  </Box> 
                ): (
                  filteredPokemons.map((item, index) => (
                    <CardList key={index} pokemon={item} />
                    ))
                )
              }
            </Col>
          </Col>
        </Row>
        <Row className='g-0'>
            <Col md={12} className="text-center mt-4">
              <Button variant="contained" onClick={onClickLoadMore}>Load More</Button>
            </Col>

          <Col md={12} style={{ display: 'flex', justifyContent: "end" }}>
            <Col md={3}>
              {/* <Button variant="contained" onClick={onClickLoadMore}>Load More</Button> */}
            </Col>
            <Col md={9} className="d-flex justify-content-end" >
              {/* <Pagination>
                <Pagination.First onClick={()=>pageClick(active -1)}/>
                { PaginationComp(next) }
                <Pagination.Last  onClick={()=>pageClick(active +1)}/>
              </Pagination> */}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
