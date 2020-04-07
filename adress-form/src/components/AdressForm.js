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
        console.log(values)
    }

    const handleCep = event => {
        const cepDigitado = event.target.value
        if (cepDigitado.length === 8) {
            fetch(`http://viacep.com.br/ws/${event.target.value}/json/`)
            .then(response => response.json())
            .then(data => {
                const { cep, logradouro, bairro, localidade, uf } = data
                formik.setValues({ cep, logradouro, bairro, localidade, uf })
            })
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
    })

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
                <Form {...layout} onFinish={formik.handleSubmit}>
                    <Form.Item label="Nome" name="nome"  >
                        <Input {...formik.getFieldProps("nome")} />
                    </Form.Item>
                    <Form.Item label="Email" name="email"  >
                        <Input {...formik.getFieldProps("email")}
                        rules={
                            {
                              type: 'email',
                              message: 'Email inválido!',
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="CPF" name="cpf"  >
                        <Input {...formik.getFieldProps("cpf")} />
                    </Form.Item>
                    <Form.Item label="Telefone" name="telefone"  >
                        <Input {...formik.getFieldProps("telefone")} />
                    </Form.Item>
                    <Form.Item label="CEP" name="cep"  >
                        <Input onChange={handleCep} />
                    </Form.Item>
                    <Form.Item label="Logradouro" name="logradouro"  >
                        <Input {...formik.getFieldProps("logradouro")} />
                    </Form.Item>
                    <Form.Item label="Número" name="numero"  >
                        <Input {...formik.getFieldProps("numero")} />
                    </Form.Item>
                    <Form.Item label="Bairro" name="bairro" >
                        <Input {...formik.getFieldProps("bairro")} />
                    </Form.Item>  
                    <Form.Item label="Cidade" name="localidade" >
                        <Input {...formik.getFieldProps("localidade")} />
                    </Form.Item> 
                    <Form.Item label="UF" name="uf"  >
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