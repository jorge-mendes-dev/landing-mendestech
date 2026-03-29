interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string
  bgColor?: string
}

const Divider = ({
  width = 'w-64',
  bgColor = 'bg-primary',
  ...props
}: DividerProps) => {
  return (
    <div
      className="w-full mb-6 flex items-center justify-center"
      data-testid="divider"
      {...props}
    >
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50 dark:border-border-dark/50"></div>
        </div>
        <div className="relative flex items-center">
          <div
            className={`h-1.5 ${bgColor} ${width} rounded-full bg-gradient-to-r from-primary via-primary-light to-primary shadow-card relative overflow-hidden`}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Divider
