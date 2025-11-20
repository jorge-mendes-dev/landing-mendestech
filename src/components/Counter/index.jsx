import { random } from 'utils/generic'
import CounterItem from './CounterItem'

import config from 'config'

const Counter = () => {
  const { metrics } = config

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-600 to-primary-800 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-20 md:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="relative font-general-medium container mx-auto px-4 sm:px-6 lg:px-8 block sm:flex sm:justify-between items-center gap-8">
        {metrics.map(({ title, reference, measure, level }, index) => (
          <div key={random()} className="flex-1 text-center sm:text-left">
            <CounterItem
              title={`${title}`}
              reference={`${reference}`}
              measurement={`${measure}`}
              level={level}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Counter
