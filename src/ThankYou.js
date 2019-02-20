import React from 'react'
import { withTranslation } from 'react-i18next'

const Hello2 = ({t}) => {
  return (
    <div>
      {t('thankyou.label')}
    </div>
  )
}

export default withTranslation()(Hello2)
