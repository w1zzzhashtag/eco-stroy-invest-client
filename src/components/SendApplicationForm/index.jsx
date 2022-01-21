import React from 'react';
import Title from '../Title';
import { Button, DatePicker, Form, Input, notification } from 'antd';
import { PRIVACY_POLICY_URL } from '../../common/constants';
import classes from './sendApplicationForm.module.scss';
import moment from 'moment';

const SendApplicationForm = ({ variant }) => {
    const onFinishFailed = () => {
        notification.warn({
            message: 'Внимание',
            description: 'Вы должны заполнить все поля, для успешной отправки формы',
        });
    };

    const textVariants = {
        default: {
            title: 'Сколько будет стоить ремонт',
            subtitle:
                // eslint-disable-next-line max-len
                'Оставьте свой номер, наш менеджер расспросит об особенностях квартиры, расскажет о материалах и сориентирует по стоимости.',
        },
        measurerCall: {
            title: 'Вызов замерщика',
            subtitle: 'Оставьте свои контакты. Мы перезвоним и договоримся о встрече в удобное для вас время.',
        },
        backCall: {
            title: 'Заказ обратного звонка',
            subtitle: 'Оставьте свои контакты. Мы перезвоним и договоримся о встрече в удобное для вас время.',
        },
    };

    const getTextBasedOnVariant = () => {
        return textVariants[variant] || textVariants['default'];
    };

    const onFinish = async (values) => {
        try {
            // eslint-disable-next-line no-undef
            const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values,
                    dateTime: values.dateTime ? values.dateTime.toISOString() : null,
                    subject: getTextBasedOnVariant().title,
                }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
            notification.success({
                message: 'Успех',
                description: 'Заявка была успешно отправлена',
            });
        } catch (err) {
            notification.error({
                message: 'Ошибка',
                description: err.message || 'Что-то пошло не так',
            });
        }
    };

    return (
        <div className={classes.wrapper}>
            <Title textAlign="left">{<b>{getTextBasedOnVariant().title}</b>}</Title>
            <p>{getTextBasedOnVariant().subtitle}</p>

            <Form labelCol={{ span: 24 }} wrapperCol={{ span: 15 }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Пожалуйста введите имя!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Телефон"
                    name="phone"
                    rules={[{ required: true, message: 'Пожалуйста введите телефон!' }]}
                >
                    <Input />
                </Form.Item>

                {variant === 'backCall' && (
                    <Form.Item label="Выберите дату и время" name="dateTime">
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss').iso }}
                        />
                    </Form.Item>
                )}

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={classes.button}>
                        Узнать стоимость
                    </Button>
                </Form.Item>
            </Form>
            <p>
                Нажимая на кнопку, вы соглашаетесь с{' '}
                <a href={PRIVACY_POLICY_URL}>политикой защиты персональной информации</a>.
            </p>
        </div>
    );
};

export default SendApplicationForm;
