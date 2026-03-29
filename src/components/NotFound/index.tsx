import { Player } from '@lottiefiles/react-lottie-player'
import Divider from 'components/Divider'
import alien from 'utils/JSON/alien.json'

interface NotFoundProps {
  title: string
}

const NotFound: React.FC<NotFoundProps> = ({ title, ...props }) => (
  <section
    className={`bg-background dark:bg-background-dark py-8`}
    id="notFound"
    {...props}
  >
    <div className={`container max-w-5xl mx-auto m-8`}>
      <h2
        className={`w-full my-2 text-5xl font-bold leading-tight text-center`}
      >
        {title.split(' ').map((word, index) => (
          <span
            key={index}
            className={
              index % 2
                ? 'text-primary'
                : 'text-text-primary dark:text-text-primary-dark'
            }
          >
            {word}{' '}
          </span>
        ))}
      </h2>

      <Divider />
      <div className={`flex items-center justify-center flex-wrap p-8 `}>
        <Player src={alien} loop autoplay />
      </div>
    </div>
  </section>
)

export default NotFound
