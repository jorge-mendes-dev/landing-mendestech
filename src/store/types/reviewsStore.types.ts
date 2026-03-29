export interface ReviewItem {
  name: string
  review: string
}

export interface ReviewsConfig {
  title: string
  feedbacks: ReviewItem[]
}
