import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import { Link } from 'react-router'
const FormItem = Form.Item;

class Login extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id="components-form-demo-normal-login">
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入用户名'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "user" />} placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "lock" />} type="password" placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot">找回密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>

                        <Link to="reg">注册</Link>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(Login)
