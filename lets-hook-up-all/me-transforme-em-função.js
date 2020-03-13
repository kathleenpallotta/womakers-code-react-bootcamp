import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-react-ui'

function ExampleComponent (props) {

    // state = {
    //     showForm: false,
    //     email: "",
    //     name: this.props.name
    // }

    const [showForm, setShowForm] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState(props.name)

    // componentDidMount() {

    //     /* algum fetch de dado que a gente quer rodar somente uma vez
    //     ....................
    //     */
    // }

    React.useEffect(() => {

    }, [])

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     /* executa alguma request 
    //     ....................
    //     */
    // }
    const handleSubmit = (e) => {
        e.preventDefault()

        /* executa alguma request 
        ....................
        */
    }


    // toggleShowForm = (e) => {

    //     this.setState({
    //         showForm: !this.state.showForm,
    //     })
    // }

    // RENDERS ------------------------------

    const renderForm = () => {
        return <Form onSubmit={handleSubmit}>
            <Form.Input name="name" value={name} onChange={e => setName(e.target.value)} />
            <Form.Input name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Button type="submit">Submit!</Form.Button>
        </Form>
    }

    // RENDER --------------------------------

        return (
            <div >
                {showForm ? renderForm()
                    : <Fragment>
                        <h3>Hi, {name}</h3>
                        <Button onClick={() => setShowForm(!showForm)}>Enter Email Address!</Button>
                    </Fragment>
                }
            </div>
        )
}

export default ExampleComponent

