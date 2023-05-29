//@ts-ignore

import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from "styled-components";

import Button from "@/ui/components/Button/Button";
import {lamp_api_responce} from "@/ui/components/LightCalculator v2/SIMULATE_API_RESPONCE/lamp_api_responce";
import {Flex} from "~primitives/Flex";



const LapmItem = styled.div`
  padding: 5px 15px;
  background-color: lightgrey;
  width: 200px;
  &:hover{
    cursor: pointer;
  }
`


// @ts-ignore
const LampCatalogue = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const getLampCatalog = () => {
        return lamp_api_responce.map(item=> (
            <LapmItem key={item.id}
                        onClick={()=> {
                            closeModal();
                        }}>
                      <h3>{item.title}</h3>
                      <img src={item.image}/>
            </LapmItem>))
    }


    const modalContent = (
        <>
            <h2>Выберите лампу</h2>
            <Flex flexWrap={"wrap"} flexDirection={"row"} width={'100%'} gap={20}>
                {getLampCatalog()}
            </Flex>
        </>
    );


    return (
            <div>
                <Button width={'100%'} onClick={openModal} variant='outlined'>Выбрать лампу для расчета</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        top: 'auto',
                        left: 'auto',
                        right: 'auto',
                        bottom: 'auto',
                        width: '800px',
                        height: '500px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}>
                    {modalContent}
                </Modal>
            </div>
    );
};

export default LampCatalogue;