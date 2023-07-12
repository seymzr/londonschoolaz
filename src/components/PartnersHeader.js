import React from 'react'
import {useTranslation} from 'react-i18next'

function PartnersHeader() {
  const {t,i18n} = useTranslation()

  return (
    <h2 className="text-center bluetext">{t('partners')}</h2>

  )
}
export default PartnersHeader;