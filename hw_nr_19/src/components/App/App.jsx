
import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';


const { Title } = Typography;

function App() {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
    form.resetFields();
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: '50px auto',
      backgroundColor: 'lightsteelblue',
      padding: '12px'
    }}>
      <Title level={2}>Форма ввода</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card title="Отправленные данные" style={{ marginTop: 20 }}>
          <p><strong>Имя:</strong> {submittedData.name}</p>
          <p><strong>Описание:</strong> {submittedData.description}</p>
        </Card>
      )}
    </div>
  );
}

export default App;
