import React,{useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../functions";

const ShowProducts = () => {
    const url='http://localhost/api-products-main/';
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(()=>{
        getProduct();
    },[]);

    const getProduct = async ()=>{
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }

    
    const openModal = (op,id,name,description,price)=>{
        setId('');
        setName('');
        setDescription('');
        setPrice('');
        setOperation(op);
        if (op === 1) {
            setTitle('Registrar Producto');
        } else if (op === 2) {
            setTitle('Editar Producto');
            setId(id);
            setName(name);
            setDescription(description);
            setPrice(price);
        }
        window.setTimeout(function ()   {
            document.getElementById('nombre').focus();
        },500);
    }

    const validar = ()=> {
        var parametros;
        var metodo;
        if(name.trim() === ''){
            show_alerta('El titulo no puede estar vacío','warning');
        } else if(description.trim() === ''){
            show_alerta('El body no puede estar vacío','warning');
        } else if(price.trim() === ''){
            show_alerta('El precio no puede estar vacío','warning');
        }else{
            
            if(operation === 1){
                
                parametros = { name:name.trim() , description:description.trim() , price:price.trim() };
                metodo = 'POST';
            }else{
                parametros = { id : id , name:name.trim() , description:description.trim(), price:price.trim()};
                metodo = 'PUT';
            }

           enviarSoliciitud(metodo,parametros)
        }

    }

    
     const actualizarProducto = async (id, datosActualizados) => {
        console.log(id)
        console.log(datosActualizados)
        try {
          const url = `http://localhost/api-products-main/`;
      
          // Realizar la solicitud PUT usando Axios
          const respuesta = await axios.put(url, datosActualizados);
      
          // Manejar la respuesta exitosa
          console.log(respuesta.data); // Puedes hacer algo con la respuesta, como mostrar un mensaje de éxito
        console.log('hola')
        } catch (error) {
          // Manejar el error
          console.error('Error al actualizar el producto:', error);
          // Puedes mostrar una alerta de error o tomar otras acciones según tus necesidades
        }
      };
      
      // Llamar a la función actualizarProducto con los parámetros adecuados
      const idProducto = 1; // ID del producto que deseas actualizar
      
      const datosActualizados = {
        id: '1',
        name: 'conto',
        description: 'Nueva descripción',
        price: 99.99,
      };


     const enviarSoliciitud = async(metodo,parametros) => {
        // console.log(metodo);
        // console.log(parametros);
        // console.log(url);
        axios.request({
            method: metodo,
            url: url,
            data: parametros
          }).then(function (respuesta) {
              var tipo = respuesta.data[0];
              console.log(tipo);
              var msj = respuesta.data[1];
              show_alerta(msj, tipo);
              if (tipo === 'success') {
                document.getElementById('btnCerrar').click();
                getProduct();
              }
            })
            .catch(function (error) {
              // Manejar el error según tus necesidades
              console.error('Error en la solicitud:', error);
            });
     }

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="d-grid mx-auto">
                            <button className="btn btn-dark" data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                <i className="fa-solid fa-circle-plus"></i>Añadir
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>PRODUCTO</th>
                                        <th>DESCRIPTION</th>
                                        <th>PRECIO</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product,i)=>(
                                        <tr key={product.id}>
                                            <td>{i+1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>{new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                            <td>
                                               <button onClick={() => openModal(2,product.id,product.name,product.description,product.price)} 
                                               className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                <i className="fa-solid fa-edit"></i>
                                                </button> 
                                            </td>
                                            <td>
                                               <button className="btn btn-danger">
                                                <i className="fa-solid fa-trash"></i>
                                                </button> 
                                            </td>
                                        </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modalProducts" className="modal fade" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="h5">{title}</label>
                                <button type="button" className="btn-close" data-bs-dismiss='modal' aria-label="close"></button>
                        </div>
                        <div className="modal-body">
                            <input type='hidden' id='id'></input>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                                <input type='text' id="nombre" className="form-control" placeholder="Nombre" value={name}
                                onChange={(e)=> setName(e.target.value)}></input>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                                <input type='text' id="descripcion" className="form-control" placeholder="Descripcion" value={description}
                                onChange={(e)=> setDescription(e.target.value)}></input>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
                                <input type='text' id="precio" className="form-control" placeholder="Precio" value={price}
                                onChange={(e)=> setPrice(e.target.value)}></input>
                            </div>
                            <div className="d-grid col-6 mx-auto">
                                <button onClick={() => validar()} className="btn btn-success">
                                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button id="btnCerrar" type='button' className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-md-4 offset-md-4">
                        <div className="d-grid mx-auto">
                            <button onClick={() => actualizarProducto(idProducto, datosActualizados)} className="btn btn-dark">
                                <i className="fa-solid fa-circle-plus"></i>edital
                            </button>
                        </div>
            </div>
        </div>

    )
}

export default ShowProducts;