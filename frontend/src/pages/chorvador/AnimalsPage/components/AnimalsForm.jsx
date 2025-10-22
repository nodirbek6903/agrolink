import { useState } from "react";
import { Modal, Form, Input, Select, InputNumber, DatePicker, Switch, Button } from "antd";

const { Option } = Select;

const AnimalsForm = ({ open, onClose, onSubmit, initialValues }) => {
  const [form] = Form.useForm();
  const [selectedType, setSelectedType] = useState(initialValues?.type || "");

  // Hayvon turiga qarab maqsadlar ro‘yxati
  const purposeOptions = {
    "Sigir": ["Sut uchun", "Go‘sht uchun", "Nasl uchun"],
    "Qo‘y": ["Go‘sht uchun", "Jun uchun", "Nasl uchun"],
    "Tovuq": ["Tuxum uchun", "Go‘sht uchun"],
    "Echki": ["Sut uchun", "Go‘sht uchun", "Nasl uchun"],
    "Baliq": ["Go‘sht uchun", "Nasl uchun"],
    "Ot": ["Nasl uchun", "Go‘sht uchun", "Sport uchun", "Yuk tashish uchun"],
  };

  // Boshlang‘ich qiymatlarni to‘ldirish (agar tahrirlash bo‘lsa)
  if (initialValues) {
    form.setFieldsValue(initialValues);
  }

  const handleFinish = (values) => {
    console.log("Yangi hayvon ma'lumotlari:", values);
    onSubmit?.(values);
    onClose();
  };

  return (
    <Modal
      open={open}
      title={initialValues ? "🐮 Hayvonni tahrirlash" : "🆕 Yangi hayvon qo‘shish"}
      onCancel={onClose}
      footer={null}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        initialValues={{
          gender: "Urg‘ochi",
          health: "Sog‘lom",
          milkPerDay: 0,
          active: true,
        }}
      >
        {/* 🐮 Ismi */}
        <Form.Item label="Ismi" name="name" rules={[{ required: true, message: "Ismni kiriting!" }]}>
          <Input placeholder="Masalan: Bodom" />
        </Form.Item>

        {/* 🐄 Hayvon turi */}
        <Form.Item label="Turi" name="type" rules={[{ required: true, message: "Turlarni tanlang!" }]}>
          <Select
            placeholder="Hayvon turini tanlang"
            onChange={(value) => setSelectedType(value)}
          >
            <Option value="Sigir">Sigir</Option>
            <Option value="Qo‘y">Qo‘y</Option>
            <Option value="Tovuq">Tovuq</Option>
            <Option value="Echki">Echki</Option>
            <Option value="Baliq">Baliq</Option>
            <Option value="Ot">Ot</Option>
          </Select>
        </Form.Item>

        {/* 🎯 Boqilish maqsadi (dinamik chiqadi) */}
        <Form.Item
          label="Boqilish maqsadi"
          name="purpose"
          rules={[{ required: true, message: "Boqilish maqsadini tanlang!" }]}
        >
          <Select
            placeholder="Tanlang"
            disabled={!selectedType}
          >
            {(purposeOptions[selectedType] || []).map((item) => (
              <Option key={item} value={item}>{item}</Option>
            ))}
          </Select>
        </Form.Item>

        {/* 🚻 Jinsi */}
        <Form.Item label="Jinsi" name="gender">
          <Select>
            <Option value="Urg‘ochi">Urg‘ochi</Option>
            <Option value="Erkak">Erkak</Option>
          </Select>
        </Form.Item>

        {/* 📅 Yoshi */}
        <Form.Item label="Yoshi (yil/oy)" name="age">
          <Input placeholder="Masalan: 3 yil 2 oy" />
        </Form.Item>

        {/* ⚖️ Og‘irligi */}
        <Form.Item label="Og‘irligi (kg)" name="weight">
          <InputNumber min={0} placeholder="Masalan: 420" style={{ width: "100%" }} />
        </Form.Item>

        {/* 🥛 Kunlik sut miqdori */}
        <Form.Item label="Kunlik sut miqdori (L)" name="milkPerDay">
          <InputNumber min={0} placeholder="Masalan: 20" style={{ width: "100%" }} />
        </Form.Item>

        {/* 💉 Oxirgi emlash sanasi */}
        <Form.Item label="Oxirgi emlash sanasi" name="lastVaccination">
          <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
        </Form.Item>

        {/* ❤️ Sog‘lik holati */}
        <Form.Item label="Sog‘lik holati" name="health">
          <Select>
            <Option value="Sog‘lom">Sog‘lom</Option>
            <Option value="Kuzatuvda">Kuzatuvda</Option>
            <Option value="Kasallangan">Kasallangan</Option>
          </Select>
        </Form.Item>

        {/* 🔄 Faollik */}
        <Form.Item label="Faolmi?" name="active" valuePropName="checked">
          <Switch checkedChildren="Ha" unCheckedChildren="Yo‘q" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {initialValues ? "Saqlash" : "Qo‘shish"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AnimalsForm;
