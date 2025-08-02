import { useState } from 'react';

const faqData = [
  {
    pregunta: '¿Cuánto tiempo tarda en entregarse una maqueta 3D?',
    respuesta: 'El tiempo de entrega depende del plan seleccionado. Puede variar entre 24 horas y 5 días hábiles.',
  },
  {
    pregunta: '¿Puedo personalizar el diseño de mi maqueta?',
    respuesta: 'Sí. Los planes Profesional y Premium permiten personalización completa del diseño según tus necesidades.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos tarjetas de crédito, transferencias bancarias y pagos mediante aplicaciones móviles como PayPal o Stripe.',
  },
  {
    pregunta: '¿Ofrecen reembolsos si no estoy satisfecho?',
    respuesta: 'Sí. Ofrecemos una política de satisfacción garantizada de 7 días en la que puedes solicitar un reembolso parcial o total.',
  },
];

const Preguntas = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id ='faq'>
      <h2 className="faq-title">Preguntas frecuentes</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleIndex(index)}>
              {item.pregunta}
            </button>
            {openIndex === index && <p className="faq-answer">{item.respuesta}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Preguntas;
