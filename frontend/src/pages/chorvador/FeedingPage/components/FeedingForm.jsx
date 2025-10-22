import { Modal, Form, Input, DatePicker } from "antd";

const FeedingForm = ({ open, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title="🆕 Yangi ratsion qo‘shish"
      open={open}
      onOk={handleSubmit}
      onCancel={onClose}
      okText="Saqlash"
      cancelText="Bekor qilish"
    >
      <Form layout="vertical" form={form}>
        <Form.Item name="date" label="Sana" rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="animalName" label="Hayvon nomi" rules={[{ required: true }]}>
          <Input placeholder="Masalan: Lola" />
        </Form.Item>
        <Form.Item name="morningFeed" label="Ertalabki ovqat" rules={[{ required: true }]}>
          <Input placeholder="Masalan: Silo 5kg, Yem 1kg" />
        </Form.Item>
        <Form.Item name="afternoonFeed" label="Tushlik ovqat" rules={[{ required: true }]}>
          <Input placeholder="Masalan: Bedana 3kg, Suv 12L" />
        </Form.Item>
        <Form.Item name="eveningFeed" label="Kechki ovqat" rules={[{ required: true }]}>
          <Input placeholder="Masalan: Arpa 2kg, Yem 1kg" />
        </Form.Item>
        <Form.Item name="notes" label="Izoh">
          <Input.TextArea placeholder="Qo‘shimcha izoh..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FeedingForm;
