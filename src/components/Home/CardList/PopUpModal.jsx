import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LinearProgressWithLabel from './ProgressBar';
import Altimage from '../../../assests/pokeball.png'
import './style.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PopUpModal = ({openModel, onHide, pokeInfo }) => {
  return (
    <div>
      <Modal
        keepMounted
        open={openModel}

        onClose={onHide}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <div className='row col-md-12'>
              <div className='col-md-6 popup'>
                <span className='popup-pokemon-id'>#{pokeInfo.id}</span>
                  <h1 className='popup-pokemon-name my-3'>{pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1)}</h1>
                  <div className='card-types info-pokemon-type'>
                    {pokeInfo.types.map(type => (
                      <span key={type.type.name} className={`${type.type.name}`}>
                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                      </span>
                    ))}
                  </div>
                  <div className='d-flex justify-content-start my-4 '>
                    <div className='group-info' style={{ marginRight: "40px"}}>
                      <p className='poke-info mb-2'>Height</p>
                      <span className='poke-value'>{pokeInfo.height}</span>
                    </div>
                    <div className='group-info'>
                      <p className='poke-info mb-2'>Weight</p>
                      <span className='poke-value'>{pokeInfo.weight}KG</span>
                    </div>
                  </div>
              </div>
              <div className='col-md-6'>
                {
                  pokeInfo.sprites.other.dream_world.front_default == '' ? (
                    <img src={pokeInfo.sprites.other.dream_world.front_default} alt="" />
                  ) : (
                    <img src={Altimage} alt="" />
                  )
                }
              </div>
            </div>

            <div className='col-md-12'>
              <h1 className='poke-stats my-3'>Statistics : </h1>
              <div className='stats'>
                <div className='row col-md-12'>
                  <span className='col-md-3 poke-levels'>Hp</span>
                  <div className='progress-bar col-md-9'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgressWithLabel  value={pokeInfo.stats[0].base_stat} />
                    </Box>
                  </div>
                </div>
                <div className='row col-md-12'>
                  <span className='col-md-3 poke-levels'>Attack</span>
                  <div className='progress-bar  col-md-9'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgressWithLabel  value={pokeInfo.stats[1].base_stat} />
                    </Box>
                  </div>
                </div>
                <div className='row col-md-12'>
                  <span className='col-md-3 poke-levels'>Defense</span>
                  <div className='progress-bar col-md-9'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgressWithLabel value={pokeInfo.stats[2].base_stat} />
                    </Box>
                  </div>
                </div>
                <div className='row col-md-12'>
                  <span className='col-md-3 poke-levels'>Special Attack</span>
                  <div className='progress-bar col-md-9'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgressWithLabel value={pokeInfo.stats[3].base_stat} />
                    </Box>
                  </div>
                </div>
                <div className='row col-md-12'>
                  <span className='col-md-3 poke-levels'>Special Defense</span>
                  <div className='progress-bar col-md-9'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgressWithLabel value={pokeInfo.stats[4].base_stat} />
                    </Box>
                  </div>
                </div>
                <div className='row col-md-12'>
                  <span className='col-md-3 poke-levels'>Speed</span>
                  <div className='progress-bar col-md-9'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgressWithLabel value={pokeInfo.stats[5].base_stat} />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}


export default PopUpModal;