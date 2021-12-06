import React from 'react'

export const NasaJumbotron = () => {
    return (
        <div className="container ">
            <br />
            <div className="h-100 p-5 text-white bg-dark rounded-3">
                <div className="row">
                    <div className="col-6">
                        <blockquote className="blockquote pb-2">
                        <p>
                        "Tiene que haber algo muy especial acerca de los límites del universo. ¿Y qué es más especial que el hecho de que no haya límites? 
                        Y no debe haber límites en el empeño humano. 
                        Todos somos diferentes. No importa lo difícil que pueda parecer la vida. 
                        Siempre hay algo que puedes hacer y tener éxito. Mientras haya vida, habrá esperanza"
                        </p>
                        </blockquote>
    
                            <figcaption className="blockquote-footer mb-0 font-italic ">
                                Sthephen Hawking
                            </figcaption>

                    </div>
                    <div className="col-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" height="200px" width="100px" className="card-img-top"/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
