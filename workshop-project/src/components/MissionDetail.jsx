import { X } from 'lucide-react';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const MissionDetail = ({ open, mission, onClose }) => {
  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      <div className={`fixed top-0 bottom-0 left-[430px] z-10 bg-white p-5 w-[400px] h-[100%] overflow-auto shadow-xl`}>
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{mission?.m_nom}</h1>
          <X size={24} className="cursor-pointer" onClick={onClose} />
        </div>
        <p className="mb-4">{mission?.m_description}</p>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <h2 className="text-lg font-bold mb-2">Distance</h2>
            <p>2.5 km</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <h2 className="text-lg font-bold mb-2">Date</h2>
            <p>{new Date(mission?.m_date).toLocaleDateString()}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <h2 className="text-lg font-bold mb-2">Categorie</h2>
            <p>{mission?.categorie}</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p>{mission?.organisateur}</p>
          <p>{mission?.mail_organisateur}</p>
          <p>{mission?.telephone_organisateur}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="px-5 py-2 rounded-[100px] bg-amber-300 text-white font-bold text-lg">Proposer mon aide</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MissionDetail;
