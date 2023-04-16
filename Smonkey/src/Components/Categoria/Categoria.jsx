import React from 'react'
import style from "./index.module.css"



const categorias = [
    { name: 'Parafernalia', company: 'Yeezy', sizes: ['S', 'M', 'L', 'XL'], price: 120, imgUrl: 'http://code.slicecrowd.com/labs/4/images/t-shirt.png' },
    { name: 'RSO', company: 'Company 2', sizes: ['S', 'M'], price: 50, imgUrl: 'http://code.slicecrowd.com/labs/4/images/t-shirt.png' },
    { name: 'Cultivo Indoor', company: 'Company 2', sizes: ['S', 'M'], price: 50, imgUrl: 'http://code.slicecrowd.com/labs/4/images/t-shirt.png' },
    { name: 'Herramientas', company: 'Company 2', sizes: ['S', 'M'], price: 50, imgUrl: 'http://code.slicecrowd.com/labs/4/images/t-shirt.png' },

];
export const Categoria = () => {
    return (
        <div className={style.container}>

            {categorias.map((categoria, index) => (
                <div className={style.container1}>
                    <div className={style.cta}>
                        
                        <div className={style.text}>
                            <h2>{categoria.name}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, 
                                ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam.</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
