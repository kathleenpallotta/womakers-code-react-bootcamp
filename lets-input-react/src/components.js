import React, {Component} from 'react';
import {TextInput, Button } from 'react-materialize';
import './styles.css';

export const FormPage = () => (
    <RegisterForm />
);

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: '',
            Cidade: '',
            Email: '',
            Cpf: '',
            Telefone: ''
        }
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.name)
        this.setState(
            {
                [name]: value
            }
        )
    }

    validateEmail = email => email.includes("@") && email.includes(".");

    handleSubmit = event => {
        event.preventDefault();
        const { Nome, Cidade, Email, Cpf, Telefone} = this.state;
        if (!this.validateEmail(Email)) {
            return alert("Por favor insira um e-mail válido.");
          }
        if (!Nome || !Cidade || !Email || !Cpf || !Telefone) {
            return alert("por favor, preencha todos os campos");
        }
    
    }

    render() {
        return (
            <div>
                <h1>Cadastro de alunas</h1>
                
                <FormInput 
                        Nome={this.state.Nome}
                        Cidade={this.state.Cidade}
                        Email={this.state.Email}
                        Cpf={this.state.Cpf}
                        Telefone={this.state.Telefone}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        />
                {/* <SubmitButton /> */}
            </div>
        );
    }
}

export class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const Nome = this.props.Nome;
        const Cidade = this.props.Cidade;
        const Email = this.props.Email;
        const Cpf = this.props.Cpf;
        const Telefone = this.props.Telefone;
        const handleChange = this.props.handleChange;
        const handleSubmit = this.props.handleSubmit;
        
        return (
            <form onSubmit={handleSubmit} >
                <label>Nome completo</label>
                <TextInput validate
                value={Nome} name="Nome" onChange={handleChange} />
                <label>Cidade</label>
                <TextInput value={Cidade} name="Cidade" onChange={handleChange} />

                <label>Email</label>
                <TextInput 
                email error = "Por favor, insira um e-mail válido." success="" validate
                placeholder="email@email.com" value={Email} name="Email" onChange={handleChange} />
                
                <label>CPF</label>
                <TextInput placeholder="000.000.000-00" value={Cpf} name="Cpf" onChange={handleChange} />

                <label>Telefone</label>
                <TextInput placeholder="(xx) xxxxx-xxxx" value={Telefone} name="Telefone" onChange={handleChange} />

                <Button>Inscrever</Button>
            </form>
        )
    }
}
{/* 
export const SubmitButton = () => (
    <button>Inscrever</button>
) */}