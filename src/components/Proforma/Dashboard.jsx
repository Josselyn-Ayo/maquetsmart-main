import { authFirebase } from '../../firebase';
import { signOut } from "firebase/auth";
import { useForm } from "react-hook-form";
import { dbFirebase } from "../../firebase";
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Dashboard = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [maquetas, setMaquetas] = useState([])
    const [id, setId] = useState("")


    const handleLogout = async () => {
        try {
            await signOut(authFirebase);
            window.location.href = "/"
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreate = async (data) => {
        try {
            if (id) {
                await updateDoc(doc(dbFirebase, "maquetas", id), data)
                setId("")
                reset({
                    nombre: '',
                    imagen: '',
                    precio: '',
                    descripcion: ''
                })
            }
            else {
                await addDoc(collection(dbFirebase, "maquetas"), data)
                reset()
            }
            handleGet()
        } catch (error) {
            console.log(error);
        }
    }

    const handleGet = async () => {
        const snapshot = await getDocs(collection(dbFirebase, "maquetas"))
        const documentos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setMaquetas(documentos)
    }

    const hanleDelete = async (id) => {
        const confirmar = confirm("Vas a eliminar, ¿Estás seguro?")
        if (confirmar){
            const userDoc = doc(dbFirebase, "maquetas", id)
            await deleteDoc(userDoc)
            handleGet()
        }
    }

    const handleEdit = (maqueta) => {
        setId(maqueta.id)
        reset({
            nombre: maqueta.nombre,
            imagen: maqueta.imagen,
            precio: maqueta.precio,
            descripcion: maqueta.descripcion
        })
    }

    useEffect(() => {
        handleGet()
    }, [])

    return (
         <>
        <Header/>
        <main>
            <section className="header_projects">
                <p>Bienvenido - </p>
                <div className="header-actions">
                    <button className="theme-toggle">🌙</button>
                    <button className="logout-btn" onClick={handleLogout}>Salir</button>
                </div>
            </section>

            <section className="container_projects">
                <section className="form-section">
                    <h4>Crear</h4>
                    <p>Módulo para crear maquetas</p>

                    <form className="route-form" onSubmit={handleSubmit(handleCreate)}>

                        <label>Nombre:</label>
                        <input type="text" placeholder="nombre de la maqueta"
                            name='nombre'
                        {...register("nombre",{ required: true })}
                        />
                        {errors.nombre && <span className="errors">El nombre es requerido</span>}

                        <label>Imagen:</label>
                        <input type="url" placeholder="url de imagen de la maqueta"
                            name='imagen'
                        {...register("imagen",{ required: true })}
                        />
                        {errors.imagen && <span className="errors">La imagen es requerido</span>}

                        <label>Precio:</label>
                        <input type="number" placeholder="precio de la maqueta"
                            name='precio'
                        {...register("precio",{ required: true })}
                        />
                        {errors.precio && <span className="errors">El precio es requerido</span>}

                        <label>Descripción:</label>
                        <textarea placeholder="descripión de la maqueta"
                            name='descripcion'
                        {...register("descripcion",{ required: true })}
                        />
                        {errors.descripcion && <span className="errors">La descripción es requerido</span>}

                        <input className="btn" type="submit" value="Enviar" ></input>
                    </form>
                </section>

                <section className="routes-section">
                    <h4>Listar</h4>
                    {maquetas ? "" : <div className="no-routes">No existen registros...</div>}
                    <p>Módulo para listar maquetas</p>

                    {
                        maquetas.map((maqueta) => (
                            <div className="route-card" key={maqueta.id}>
                                <img src={maqueta.imagen} alt="maqueta" className="route-img" />
                                <div className="route-info">
                                    <p>Nombre:{maqueta.nombre}</p>
                                    <p>Precio:{maqueta.precio}</p>
                                    <p>Descripción:{maqueta.descripcion}</p>
                                </div>
                                <div className="route-actions">
                                    <button className="update-btn" onClick={()=>{handleEdit(maqueta)}}>Actualizar</button>
                                    <button className="delete-btn" onClick={()=>{hanleDelete(maqueta.id)}}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    }
                </section>


            </section>
        </main>
        <Footer />
        </>
    )
}


export default Dashboard;