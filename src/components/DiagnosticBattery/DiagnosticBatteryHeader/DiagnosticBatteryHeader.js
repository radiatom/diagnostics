import React from 'react';
import s from "./DiagnosticBatteryHeader.module.css"

const DiagnosticBatteryHeader = () => {
      return (
            <div>
                  <div className={s.header} >
                        Завдяки нашій діагностиці ви будете впевнені які у вас причини поломки, адже ми вас проведемо по всіх етапах діагностики та разом виясним причину неполадок.
                  </div>
                  <div className={s.explanation}>
                        <p>Діагностика має вигляд тестів, даючи відповіді на них, ви отримаєте реультат діагностики, де буде написано що варто замінити для усунення проблеми. Для розуміня яку відповідь потрібно дати, ми пробували максимально пояснити суть питання в інструкціях під ними (рекомендуємо до них заглядати). Власні догадки, що вийшло з ладу відкладіть до результатів діагностики, щоб підтвердити чи спростуавти їх.</p>
                        <p>Виберіть діагностику відштовхуючись від того <span className='text-muted2'>як проблема себе проявляє</span>.</p>
                  </div>
            </div>
      );
}

export default DiagnosticBatteryHeader;