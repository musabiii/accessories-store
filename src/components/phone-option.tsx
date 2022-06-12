import React, { useRef, useState } from "react";
import styled from "styled-components";


const PhoneOptionBlock = styled.div`

    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    position: relative;

    .option-list {
        cursor: pointer;
        outline: none;
        option {
            cursor: pointer;
            outline: none;
            border: none;
        }
    }
/*
    select {
        border: 1px solid #eee;
        background-color: #eee;
        appearance: none;
        background-color: transparent;
        position: relative;

    }

    select:focus {
        border-radius: 25px;
        option {
            border-radius: 0;
        }
    } */

    .option-list {
        position: absolute;
        top: 30px;
        display: none;
        width: 300px;
        li:hover {
            background-color: aliceblue;
        }
    }

    .option-list.active {
        display: initial;
    }

`

export default function PhoneOption() {

    const optionRef = useRef<HTMLUListElement>(null);

    const [phone,setPhone] = useState("Выбрать модель телефона");


    const handleSelectPhone = () => {

    };

    const handleClickTitle = () => {
        optionRef.current?.classList.toggle('active');
    }


  return (
    <PhoneOptionBlock>

        <img
          src={process.env.PUBLIC_URL + "/img/header-phone.svg"}
          alt="phone"
        />
        <span onClick={handleClickTitle}>{phone}</span>
        {/* <select className="option-list">
            <option>Выбрать модель телефона</option>
            <option value="iphone11">iPhone 11</option>
            <option>iPhone 11 Pro</option>
            <option>iPhone 12</option>
            <option>iPhone 12 Pro</option>
            </select> */}
        <img
          src={process.env.PUBLIC_URL + "/img/header-arrow.svg"}
          alt="arrow"
        />

        <ul ref={optionRef} className="option-list">
                <li>iPhone 11</li>
                <li>iPhone 12</li>
                <li>iPhone 13</li>
        </ul>


    </PhoneOptionBlock>
  );
}
