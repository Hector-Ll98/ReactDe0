import React from 'react'
import PropTypes from 'prop-types';

// const newMesaje = {
//     message: 'Hola Mundo',
//     tittle: 'Hector',
// };

// const getSaludo = () => {
//     return 'Hola Mundo'
// };

export const FirstApp = ({tittle, subtitle}) => {
  return (
    <>
    <h1>{tittle}</h1>
    {/* <code>{JSON.stringify(newMesaje)}</code> */}
    <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    tittle: 'No hay titulo',
    subtitle: 'No hay subtitulo',
}
