import React from 'react'
import { useFormik } from 'formik'
import { Form, Button, Input, Row, Col } from 'antd'

const initialValues = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    bairro: '',
    logradouro: '',
    localidade: '',
    uf: '',
    numero: '',
}

const AdressForm = () => {
    
    const onSubmit = values => {
        alert('Cadastro realizado com sucesso!')
        console.log(values) 
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })

    const handleCep = async event => {
        const cepDigitado = event.target.value
        if (cepDigitado.length === 8) {
            await fetch(`http://viacep.com.br/ws/${event.target.value}/json/`)
            .then(response => response.json())
            .then(data => {
                const { cep, logradouro, bairro, localidade, uf } = data
                let colectedData = {cep, logradouro, bairro, localidade, uf}
                formik.values = Object.assign(formik.values, colectedData)
                let colectedDataValues = Object.values(colectedData)
                colectedData = Object.keys(colectedData)
                
                for (let i = 0; i < colectedDataValues.length; i++) {
                    if (colectedDataValues[i] !== undefined) {
                        document.getElementById(`${colectedData[i]}`).value = colectedDataValues[i]
                    }
                }
            })
        }
    }

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
    }
  
    return (
        <>
        <Row>
            <Col span={16} offset={4} >
                <h1>Cadastro de alunas</h1>
            </Col>
        </Row>
        <Row>
            <Col span={16} offset={2}>
                <Form {...layout} onFinish={formik.handleSubmit} >
                    <Form.Item label="Nome completo" name="nome" 
                    // rules={[{ required: true, message: 'Por favor, informe seu nome completo!' }]}
                    >
                        <Input {...formik.getFieldProps("nome")} />
                    </Form.Item>
                    <Form.Item label="Email" name="email" 
                    rules={
                        [{
                          type: 'email',
                          message: 'Por favor, insforme um email válido!',
                        }]}
                    >
                        <Input {...formik.getFieldProps("email")} />
                    </Form.Item>
                    <Form.Item label="CPF" name="cpf"
                    // rules={[{ type: 'number' , message: 'Por favor, informe seu CPF!' }]} 
                    extra="Informe apenas números*" >
                        <Input maxLength={11} {...formik.getFieldProps("cpf")} />
                    </Form.Item>
                    <Form.Item label="Telefone" name="telefone"
                    extra="Informe apenas números*">
                        <Input maxLength={11} {...formik.getFieldProps("telefone")} />
                    </Form.Item>
                    <Form.Item label="CEP" name="cep"
                    // rules={[{ required: true, message: 'Por favor, insforme seu CEP!' }]}
                    extra="Informe apenas números*" >
                        <Input maxLength={8} onChange={handleCep} />
                    </Form.Item>
                    <Form.Item label="Logradouro" name="logradouro" 
                    // rules={[{ required: true, message: 'Por favor, insforme um endereço válido!' }]}
                     >
                        <Input {...formik.getFieldProps("logradouro")} />
                    </Form.Item>

                    <Form.Item label="Número" name="numero" 
                    // rules={[{ required: true, message: 'Por favor, insforme um endereço válido!' }]} 
                    >
                        <Input maxLength={4} {...formik.getFieldProps("numero")} />
                    </Form.Item>

                    <Form.Item label="Bairro" name="bairro"
                    // rules={[{ required: true, message: 'Por favor, insforme um endereço válido!' }]} 
                    >
                        <Input {...formik.getFieldProps("bairro")} />
                    </Form.Item>  
                    <Form.Item label="Cidade" name="localidade"
                    // rules={[{ required: true, message: 'Por favor, insforme um endereço válido!' }]}
                    >
                        <Input {...formik.getFieldProps("localidade")} />
                    </Form.Item> 
                    <Form.Item label="UF" name="uf"
                    // rules={[{ required: true, message: 'Por favor, insforme um endereço válido!' }]} 
                    >
                        <Input {...formik.getFieldProps("uf")} />
                    </Form.Item>
                     
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        </>
    )
  }

  export default AdressForm