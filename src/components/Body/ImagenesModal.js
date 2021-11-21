import React, { useState } from "react";
import  './ImagenesModal.css'

const ImagenesModal = () => {

  let data = [
    {id: 1, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503845/Suca/fe6d5e90-de34-4423-b28f-e426b44f7523_rw_3840_vnnphb.jpg', description:'Descripción1'},
    {id: 2, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503828/Suca/373e1c88-4a8d-49ef-b0d3-0faf464e1051_rw_1920_z3ccx6.jpg', description:'Descripción2'},
    {id: 3, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503817/Suca/69353cdb-0ceb-4130-a1e1-f4eaa7678d8a_rw_1920_ukoqga.jpg', description:'Descripción3'},
    {id: 4, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503814/Suca/52fd13f6-f980-4246-9df4-0c53968eb8df_rw_1920_vy91uz.jpg', description:'Descripción'},
    {id: 5, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503801/Suca/66ea14f8-eb2d-4c3f-864f-4074b69b78c7_rw_1920_ufttb9.jpg', description:'Descripción'},
    {id: 6, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503798/Suca/775945e8-c69d-4593-bf94-1a923bccf6a2_rw_3840_bewt7r.jpg', description:'Descripción'},
    {id: 7, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503786/Suca/7500e830-b851-403a-ad02-bda4fbeaeea5_rw_1200_s69whf.jpg', description:'Descripción'},
    {id: 8, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503777/Suca/b7db1a23-da64-4351-a68b-06d3891784e4_rw_1920_wlmjzh.jpg', description:'Descripción'},
    {id: 9, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503767/Suca/33bd806e-2f27-4aa9-a60f-c5fd3c37ea7c_rw_3840_yeiz7u.jpg', description:'Descripción'},
    {id: 10, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503756/Suca/0326630a-dbf7-450b-b42b-2f05c673c3c7_rw_3840_iqb81y.jpg', description:'Descripción'},
    {id: 10, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503747/Suca/4dd6f088-928b-4850-a99b-7b5bacb8c95c_rw_1920_mngddh.jpg', description:'Descripción'},
    {id: 12, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503737/Suca/90ebdc71-f835-4fef-ac3b-a39e2543f109_rw_1920_yny5rb.jpg', description:'Descripción'},
    {id: 13, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503733/Suca/dd8c006e-9232-4ec6-8d19-d3f164ba58e5_rw_1200_mn9xx4.jpg', description:'Descripción'},
    {id: 14, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503721/Suca/893cd833-d95d-4180-a092-c265cc3225b7_rw_1920_pl0ffs.jpg', description:'Descripción'},
    {id: 15, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503716/Suca/5b4ae7d3-9bd2-4737-ada8-e8917cb1bdd8_rw_1920_i2dgwo.jpg', description:'Descripción'},
    {id: 16, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503707/Suca/b5df49c2-dd0c-4cdb-b12d-ae803aae80bf_rw_3840_aypahd.jpg', description:'Descripción'},
    {id: 17, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503698/Suca/254576a7-a5e8-4edc-9fd8-2fb2ede3ec64_rw_1200_yw61bt.jpg', description:'Descripción'},
    {id: 18, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503689/Suca/ccd367a8-b277-41bd-ace6-9f89487b5ea4_rw_1920_vqq4ka.jpg', description:'Descripción'},
    {id: 19, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503683/Suca/0bef0c2e-b3ab-4f79-86fa-61c6c886ece0_rw_1920_ivwvhq.jpg', description:'Descripción'},
    {id: 20, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503675/Suca/664905e9-72ad-4144-a21f-2771f3b8d4fa_rw_3840_wlrqme.jpg', description:'Descripción'},
    {id: 21, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503666/Suca/48940f39-bc3a-468e-8f5b-48f6efa10708_rw_1920_kppjtj.jpg', description:'Descripción'},
    {id: 22, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503664/Suca/618cd81d-9fc8-4a44-8976-eab2ce0bbae8_rw_3840_cawey0.jpg', description:'Descripción'},
    {id: 23, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503649/Suca/e6c1d179-a278-4f94-a646-fb581ad5ca0d_rw_1920_aay35q.jpg', description:'Descripción'},
    {id: 24, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503642/Suca/e1666640-ba6b-4cc4-b1b5-e96aa28a337e_rw_1920_wnqfor.jpg', description:'Descripción'},
    {id: 25, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503632/Suca/0d4e57f9-574e-4963-a7ab-665a9a80825a_rw_1920_wjeqxx.jpg', description:'Descripción'},
    {id: 26, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503623/Suca/e9adf9a7-5b15-47d8-ba37-c3284f677cb5_rw_1920_nqkwv6.jpg', description:'Descripción'},
    {id: 27, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503615/Suca/69921ace-932f-4dab-91b5-16d6bf6eca0c_rw_1920_we1fnx.jpg', description:'Descripción'},
    {id: 28, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503607/Suca/1f1d0d8c-179b-41a5-9253-a17351f4078e_rw_3840_wad2uk.jpg', description:'Descripción'},
    {id: 29, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503599/Suca/6b3c237e-7a6c-4261-9ea9-62acc096017a_rw_1920_dpw37c.jpg', description:'Descripción'},
    {id: 30, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503591/Suca/1efc8876-7a9a-4e62-b29d-a4c921afb86d_rw_1920_tk7lrk.jpg', description:'Descripción'},
    {id: 31, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503581/Suca/f978b62a-adc6-45f5-bd82-88d938343689_rw_1200_r95vrq.jpg', description:'Descripción'},
    {id: 32, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503571/Suca/c6c75c2f-a968-4b26-9718-8ca6b045a42b_rw_1200_x4q6xe.jpg', description:'Descripción'},
    {id: 33, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637503563/Suca/a64c43d1-1405-4c4c-a47a-a4ad2c732811_rw_1200_squg8l.jpg', description:'Descripción'},
    {id: 34, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637504391/Suca/aa660501-9e8e-481a-b02b-d9f723353ec7_rw_1920_hn7bjm.jpg', description:'Descripción'},
    {id: 35, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637504440/Suca/cb665cd8-4004-4059-a84f-114694416ecc_rw_3840_ezizka.jpg', description:'Descripción'},
    {id: 36, imgSrc: 'https://res.cloudinary.com/dcegpqqjc/image/upload/v1637504443/Suca/5d4610d9-85ba-4088-a927-5943168dcf20_rw_1200_mutkyt.jpg', description:'Descripción'},
 
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
