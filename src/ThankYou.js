import React from 'react'
import { withTranslation } from 'react-i18next'

const ThankYou = ({t}) => {
  return (
    <div>
      {t('thankyou.label')}
    </div>
  )
}

export default withTranslation()(ThankYou)
