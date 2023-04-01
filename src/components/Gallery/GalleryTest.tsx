import React from 'react';
import GalleryResContainer from './GalleryResContainer';
import s from './Gallery.module.css'

type propsType = {
      key: number|null
      problem: string
      testText: string
      instruction: string | null
      img: string | null
      video: string | null
      solutionYes: number | null
      solutionNo: number | null
}
const GlleryTest:React.FC<propsType> = ({ key, problem, testText, instruction, img, video, solutionYes, solutionNo }) => {
      return (
            <div className={`m-4 mb-5 ${s.GlleryTest}`}>
                  <h5>№ тесту: {key}</h5>
                  <p>Текст заголовоку: {problem}</p>
                  {testText === '' ?
                        ''
                        :
                        <p>Текст: {testText}</p>
                  }
                  {instruction === '' ?
                        ''
                        :
                        <p>Інструкція: {instruction}</p>
                  }
                  {img === null ?
                        ''
                        :
                        <div>
                              <p>Фото інструкції:</p> <img src={img} alt="" className={s.width} />
                        </div>
                  }
                  {video === null ?
                        ''
                        :
                        <div>
                              <p>Відео інструкції:</p>
                              <video className={s.width} controls>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                              </video>
                        </div>
                  }
                  <p>На відповідь так: <GalleryResContainer id={solutionYes} /> </p>
                  <p>На відповідь ні: <GalleryResContainer id={solutionNo} /></p>
            </div>
      );
}


export default GlleryTest;
// {
//       linkNumber: 181,
//       problem: "Тести проводяться за допомогою мультиметра.",
//       testText: 'У Вас є мультиметр?',
//       instruction: '',
//       linkNumberYes: 164,
//       linkNumberNo: 7,
//       solutionYes: 1,
//       solutionNo: 78,
//       img: img99,
//       video: null,
// },

// ],
// resaultDiagnostic: [
// {
//       id: 1,
//       text: '',
//       solution: false,
//       //заглушка
// },