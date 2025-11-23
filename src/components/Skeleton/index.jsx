import * as S from './styled'

const Skeleton = ({ ...props }) => {
  return (
    <S.Wrapper className="min-h-screen bg-white dark:bg-black" {...props}>
      <header className="bg-gray-300 dark:bg-black py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-400 dark:bg-zinc-900 rounded-full"></div>
            <div>
              <div className="h-4 w-20 bg-gray-400 dark:bg-zinc-900 rounded"></div>
              <div className="h-4 w-16 bg-gray-400 dark:bg-zinc-900 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-1/2 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
        </div>

        <div className="space-y-4 mt-12">
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-1/2 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
        </div>

        <div className="space-y-4 mt-12">
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-1/2 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Skeleton
