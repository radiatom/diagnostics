import React from 'react';
import GalleryResContainer from './GalleryResContainer';
import s from './Gallery.module.css'

const GlleryTest = ({elTest}) => {
      return (
            <div className={`m-4 mb-5 ${s.GlleryTest}`}>
                  <h5>№ тесту: {elTest.linkNumber}</h5>
                  <p>Текст заголовоку: {elTest.problem}</p>
                  {elTest.testText === '' ?
                        ''
                        :
                        <p>Текст: {elTest.testText}</p>
                  }
                  {elTest.instruction === '' ?
                        ''
                        :
                        <p>Інструкція: {elTest.instruction}</p>
                  }
                  {elTest.img === null ?
                        ''
                        :
                        <div>
                              <p>Фото інструкції:</p> <img src={elTest.img} alt="" className={s.width} />
                        </div>
                  }
                  {elTest.video === null ?
                        ''
                        :
                        <div>
                              <p>Відео інструкції:</p>
                              <video className={s.width} controls>
                                    <source src={elTest.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                              </video>
                        </div>
                  }
                  <p>На відповідь так: <GalleryResContainer id={elTest.solutionYes} /> </p>
                  <p>На відповідь ні: <GalleryResContainer id={elTest.solutionNo} /></p>
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