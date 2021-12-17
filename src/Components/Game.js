import React from 'react'

export function Game(props) {
    return (
    <div id='game'>
    <Card onClick={props.onClick} num={props.words[0]}/>
    <Card onClick={props.onClick} num={props.words[1]}/>
    <Card onClick={props.onClick} num={props.words[2]}/>
    <Card onClick={props.onClick} num={props.words[3]}/>
    <Card onClick={props.onClick} num={props.words[4]}/>
    <Card onClick={props.onClick} num={props.words[5]}/>
    <Card onClick={props.onClick} num={props.words[6]}/>
    <Card onClick={props.onClick} num={props.words[7]}/>
    <Card onClick={props.onClick} num={props.words[8]}/>
    <Card onClick={props.onClick} num={props.words[9]}/>
    </div>
    )}


function Card(props) {
    return (
      <div className="Card" onClick={props.onClick}>
        {props.num}
      </div>
    )
  }