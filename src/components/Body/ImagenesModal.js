import React, { useState } from "react";
import  './ImagenesModal.css'

const ImagenesModal = () => {

  let data = [
    {id: 1, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863741/Suca/fotodos_hck88w.jpg', description:'Descripción1'},
    {id: 2, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863738/Suca/NINAS0_yxgmvc.jpg', description:'Descripción2'},
    {id: 3, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863738/Suca/DETECTIVE2_lojndi.jpg', description:'Descripción3'},
    {id: 4, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863737/Suca/ELLASYEL_objjgc.jpg', description:'Descripción'},
    {id: 5, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863736/Suca/IMG_5012_m3tt9c.jpg', description:'Descripción'},
    {id: 6, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863735/Suca/YANKIENVIETNAM_kzktml.jpg', description:'Descripción'},
    {id: 7, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863734/Suca/WHATIM_qmksgm.jpg', description:'Descripción'},
    {id: 8, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863733/Suca/VIEJO2_f3deho.jpg', description:'Descripción'},
    {id: 9, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863733/Suca/RECREO3_az9w5d.jpg', description:'Descripción'},
    {id: 10, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863732/Suca/VERDULERA_upnora.jpg', description:'Descripción'},
    {id: 12, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863732/Suca/RISA2_ms7uyw.jpg', description:'Descripción'},
    {id: 13, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863732/Suca/TOKYO2_cauntk.jpg', description:'Descripción'},
    {id: 14, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863730/Suca/QUEMIRAS2_kprj2t.jpg', description:'Descripción'},
    {id: 15, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863730/Suca/IMG_4924_iibmrn.jpg', description:'Descripción'},
    {id: 16, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863730/Suca/RABI_abmegg.jpg', description:'Descripción'},
    {id: 17, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863730/Suca/PANADERO_mnp9li.jpg', description:'Descripción'},
    {id: 18, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863729/Suca/NINAS2_owfulr.jpg', description:'Descripción'},
    {id: 19, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863729/Suca/OJO_y0w0am.jpg', description:'Descripción'},
    {id: 20, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863728/Suca/LASCHICAS3_ufzcol.jpg', description:'Descripción'},
    {id: 21, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863728/Suca/NINA22_oe6wru.jpg', description:'Descripción'},
    {id: 22, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863728/Suca/MILICO_z9guvq.jpg', description:'Descripción'},
    {id: 23, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863726/Suca/IMG_4930_yvqbhn.jpg', description:'Descripción'},
    {id: 24, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863726/Suca/PROTESTA_hr9qf3.jpg', description:'Descripción'},
    {id: 25, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863726/Suca/LECTOR_pwlpr7.jpg', description:'Descripción'},
    {id: 26, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863725/Suca/IMG_4996_eyhpfr.jpg', description:'Descripción'},
    {id: 27, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863724/Suca/IMG_4888_d3dbce.jpg', description:'Descripción'},
    {id: 28, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863723/Suca/SEIS_mhtqoq.jpg', description:'Descripción'},
    {id: 29, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863723/Suca/SEIS_mhtqoq.jpg', description:'Descripción'},
    {id: 30, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863723/Suca/foto3_sukjh3.jpg', description:'Descripción'},
    {id: 31, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863723/Suca/COMPRAS_cmjuna.jpg', description:'Descripción'},
    {id: 32, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863723/Suca/IMG_4874_xkbsms.jpg', description:'Descripción'},
    {id: 33, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863723/Suca/foto8-1-3_ufnaaf.jpg', description:'Descripción'},
    {id: 34, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863719/Suca/CHINA1_ftbhvl.jpg', description:'Descripción'},
    {id: 35, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863719/Suca/AHI2_uwugkc.jpg', description:'Descripción'},
    {id: 36, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863719/Suca/ALMUERZO_exil0t.jpg', description:'Descripción'},
    {id: 37, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863719/Suca/AMEBA2_ljovl8.jpg', description:'Descripción6'},
    {id: 38, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863718/Suca/ARQUITECTO3_xptskk.jpg', description:'Descripción4'},
    {id: 39, imgSrc: 'https://res.cloudinary.com/malks14/image/upload/v1635863718/Suca/bscap0007_zg5u0f.jpg', description:'Descripción7'},
  ];

  const [modal, setModal] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState("")


  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true)
  }
  

  return (
    <>
      <div  className={modal ? "modal open" : "modal"} onClick={() => setModal(false)}>
        <img src={tempImgSrc} alt=""/>
      </div>

      <div className="galeria">
        {data.map((item, index) => {
          return(
            
              <img 
                id='photos'
                onClick={() => getImg(item.imgSrc)}
                className='imagenes'
                key={index}
                src={item.imgSrc}
                alt="" 
               />
            
          )
        })}
      </div>
    </>
  );
};

export default ImagenesModal;
