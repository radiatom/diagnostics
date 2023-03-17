import React from 'react';
import GalleryResContainer from './GalleryResContainer';
import s from './Gallery.module.css'

const GlleryTest = (props) => {
      return (
            <div className={`m-4 mb-5 ${s.GlleryTest}`}>
                  <h5>№ тесту: {props.elTest.linkNumber}</h5>
                  <p>Текст заголовоку: {props.elTest.problem}</p>
                  {props.elTest.testText === '' ?
                        ''
                        :
                        <p>Текст: {props.elTest.testText}</p>
                  }
                  {props.elTest.instruction === '' ?
                        ''
                        :
                        <p>Інструкція: {props.elTest.instruction}</p>
                  }
                  {props.elTest.img === null ?
                        ''
                        :
                        <div>
                              <p>Фото інструкції:</p> <img src={props.elTest.img} alt="" className={s.width} />
                        </div>
                  }
                  {props.elTest.video === null ?
                        ''
                        :
                        <div>
                              <p>Відео інструкції:</p>
                              <video className={s.width} controls>
                                    <source src={props.elTest.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                              </video>
                        </div>
                  }
                  <p>На відповідь так: <GalleryResContainer id={props.elTest.solutionYes} /> </p>
                  <p>На відповідь ні: <GalleryResContainer id={props.elTest.solutionNo} /></p>
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