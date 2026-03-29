import { create } from 'zustand'
import type { ReviewsConfig } from './types/reviewsStore.types'

export const useReviewsStore = create<ReviewsConfig>(() => ({
  title: 'Feedbacks',
  feedbacks: [
    {
      name: '',
      review:
        'Jorge always delivers top-notch code and really knows his way around React. He handles tough challenges with a calm, structured approach and always keeps performance in mind.'
    },
    {
      name: '',
      review:
        'He’s amazing at spotting and fixing technical bottlenecks. Whether he’s refactoring old code or building something new, his solutions are both smart and practical.'
    },
    {
      name: '',
      review:
        'Jorge pays close attention to detail, so his code is always clean, modular, and easy to maintain. He follows best practices, which makes everything easier to read and work with in the long run.'
    },
    {
      name: '',
      review:
        'It’s a pleasure working with him. He gives helpful feedback during code reviews and is always willing to help out when someone’s stuck. His communication makes the team stronger and more positive.'
    },
    {
      name: '',
      review:
        'Jorge works well both remotely and in person, making teamwork smooth and effective. He’s proactive about collaborating with designers, product managers, and other engineers to make sure everyone’s on the same page.'
    },
    {
      name: '',
      review:
        'He consistently delivers high-quality code and has a deep understanding of React. He tackles complex problems with a clear, efficient approach and always thinks about performance.'
    },
    {
      name: '',
      review:
        'His attention to detail is impressive—his code is always tidy, modular, and easy to maintain. He sticks to best practices, which really helps with readability and long-term health of the project.'
    },
    {
      name: '',
      review:
        'Jorge is super reliable and approachable. He’s the go-to person for solving both technical and organizational challenges, and his collaborative attitude inspires everyone around him.'
    }
  ]
}))
