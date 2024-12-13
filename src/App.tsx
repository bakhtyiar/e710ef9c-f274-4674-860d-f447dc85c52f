import './App.css'
import TestComponent, {Model, Param} from "./components/ParamEditor.tsx";
import {useRef} from "react";

const params: Param[] = [
    {
        "id": 1,
        "name": "Назначение",
        "type": "string"
    },
    {
        "id": 2,
        "name": "Длина",
        "type": "string"
    }
];
const model: Model = {
    "paramValues": [
        {
            "paramId": 1,
            "value": "повседневное"
        },
        {
            "paramId": 2,
            "value": "макси"
        }
    ]
};

function App() {
  const editorRef = useRef<TestComponent>(null);

  const handleGetModel = () => {
    if (editorRef.current) {
      const updatedModel = editorRef.current.getModel();
      console.log('Обновленная модель:', updatedModel);
      alert(JSON.stringify(updatedModel, null, 2));
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Редактор параметров</h1>
      <TestComponent ref={editorRef} params={params} model={model} />
      <button
        onClick={handleGetModel}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Получить модель
      </button>
    </div>
  );
}

export default App
