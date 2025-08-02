import { useEffect, useState } from "react";
import { dbFirebase } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Promotions = () => {
  const [maquetas, setMaquetas] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(dbFirebase, "maquetas"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMaquetas(data);
      }
    );

    return () => unsubscribe(); // Limpia el listener al desmontar
  }, []);

  return (
    <section className="container" id="galeria">
      <div className="proyectos">
        <h3 className="titulo-proyectos">Galería de maquetas</h3>
      </div>

      <main className="product-list">
        {maquetas.length > 0 ? (
          maquetas.map((maqueta) => (
            <div key={maqueta.id} className="maqueta-card">
              <img
                src={maqueta.imagen}
                alt={maqueta.nombre}
                className="maqueta-imagen"
              />
              <div className="maqueta-info">
                <h4>{maqueta.nombre}</h4>
                <p><strong>Precio:</strong> ${maqueta.precio}</p>
                <p>{maqueta.descripcion}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay maquetas disponibles.</p>
        )}
      </main>
    </section>
  );
};

export default Promotions;
