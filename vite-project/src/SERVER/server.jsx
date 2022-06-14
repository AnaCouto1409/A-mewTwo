import React from 'react'
import express from "express";
import cors from "cors";
import * as http from "http";
import { Server, Socket } from "socket.io";
import { generate_id } from "./utils/generate_id.js";


const server = () => {
    componentDidMount() 
    fetch('https://projeto-m4.herokuapp.com/funcionarios')
        .then(res => res.json())
        .then(res => {
            this.setState({
                linguagens: res
            });
        });
       

        render() 
            let content = <p>Funcionarios</p>
    
            if (this.state.funcionarios.length !== 0) {
                content = (<ul>
                    {this.state.funcionarios.map(item => (
                        <li key={item.id}>
                            <p><b>Funcionarios</b> {item.name}</p>
                            <p><b>Bairro:</b> {item.bairro}</p>
                            <p><b>Habilitação:</b> {item.habilitação}</p>
                        </li>
                    ))}
                </ul>)
            }
  return (
    <header>
        
    </header>
  )
}

export default server
