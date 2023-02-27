import React from 'react';
import SlideHome from '../Animations/SlideHome';
import AnuncioVeiculo from './AnuncioVeiculo';
import ComentáriosClientes from './ComentáriosClientes';
import GradeVeiculos from './GradeVeiculos';
import UltimosConteudos from './UltimosConteudos';

const Home = () => {
  return (
    <div>
      <SlideHome />
      <GradeVeiculos />
      <AnuncioVeiculo />
      <ComentáriosClientes />
      <UltimosConteudos />
    </div>
  );
};

export default Home;
