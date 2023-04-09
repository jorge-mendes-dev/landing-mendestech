import React from 'react'

import CounterItem from './CounterItem'
import { random } from 'utils/generic'

import config from 'config'

const Counter = () => {
  const { metrics } = config

  return (
    <div className="mt-10 sm:mt-20 bg-primary dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        {metrics.map(({ title, reference, measure, level }) => (
          <CounterItem
            key={random()}
            title={`${title}`}
            reference={`${reference}`}
            measurement={`${measure}`}
            level={level}
          />
        ))}
      </div>
    </div>
  )
}

export default Counter
