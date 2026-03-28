const Skeleton = ({ ...props }) => {
  return (
    <div
      className="min-h-screen bg-background dark:bg-background-dark"
      {...props}
    >
      <header className="bg-surface dark:bg-surface-dark py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="h-12 w-12 bg-border dark:bg-border-dark rounded-full"></div>
            <div>
              <div className="h-4 w-20 bg-border dark:bg-border-dark rounded"></div>
              <div className="h-4 w-16 bg-border dark:bg-border-dark rounded mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-1/2 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
        </div>

        <div className="space-y-4 mt-12">
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-1/2 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
        </div>

        <div className="space-y-4 mt-12">
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-1/2 animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-border via-surface to-border dark:from-border-dark dark:via-surface-dark dark:to-border-dark rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
